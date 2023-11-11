import { Canvas, Position } from './models';
import { Obj } from './obj';
import { Statistic } from './statistic';

const MAX_TICK_DIRECT_CALLS = 25;

const STATISTIC_ON = 'on';
const STATISTIC_TIME = 'time';
const STATISTIC_TIME_SPEED = 'timeSpeed'; // time / real time (at least last second)

export class Space {
  readonly #objs: Obj[] = [];
  readonly #objPositions = new WeakMap<Obj, Position>();
  readonly #objNextPositions = new WeakMap<Obj, Position>();
  readonly #ticksIntervalMs = this.ticksInterval * 1000;

  #state: 'stopped' | 'started' = 'stopped';
  #startTime: number = Date.now();
  #tickNextStartTime: number = Date.now();
  #tickDirectCalls: number = 0;
  #canvasComponent: Canvas | undefined;
  #lastStatisticTime = {
    real: Date.now(),
    space: Date.now(),
  };
  #statistic = new Statistic<{
    [STATISTIC_ON]: boolean;
    [STATISTIC_TIME]: number;
    [STATISTIC_TIME_SPEED]: number;
  }>({
    [STATISTIC_ON]: false,
  });
  #tickTimeout: number | undefined;
  #drawTimeout: number | undefined;

  get statistic() {
    return this.#statistic.items;
  }

  constructor(private readonly ticksInterval: number) {}

  addObject(obj: Obj, { x, y }: Position): void {
    this.#objs.push(obj);
    this.#objPositions.set(obj, { x: x, y: y });
  }

  setCanvas(canvasComponent: Canvas): void {
    this.#canvasComponent = canvasComponent;
    this.#draw();
  }

  start(): void {
    this.#state = 'started';
    this.#draw();
    this.#statistic.add(STATISTIC_ON, true);

    this.#lastStatisticTime.real = Date.now();
    this.#lastStatisticTime.space = this.statistic[STATISTIC_TIME] || 0;

    this.#startTime = Date.now();
    this.#tickNextStartTime = this.#startTime;
    this.#tickDirectCalls = 0;
    this.#requestTick();

    this.#requestDraw();
  }

  stop(): void {
    this.#state = 'stopped';
    this.#draw();
    clearTimeout(this.#tickTimeout);
    if (this.#drawTimeout) {
      cancelAnimationFrame(this.#drawTimeout);
    }
    this.#statistic.add(STATISTIC_ON, false);
  }

  #requestTick(): void {
    if (this.#state === 'stopped') return;

    const now =
      this.#tickDirectCalls === MAX_TICK_DIRECT_CALLS
        ? this.#tickNextStartTime
        : Date.now();

    if (now > this.#tickNextStartTime) {
      this.#tickDirectCalls++;
      this.#tick();
      return;
    }

    this.#tickDirectCalls = 0;
    this.#tickTimeout = setTimeout(
      () => this.#tick(),
      this.#tickNextStartTime - now
    );
  }

  #tick(): void {
    // stop check
    if (
      this.#objs.some((obj) =>
        obj.shouldStop({
          getObjPosition: (obj: Obj) => this.#objPositions.get(obj)!,
        })
      )
    ) {
      this.stop();
      return;
    }

    // prepare
    this.#objs.forEach((obj) => {
      const nextPosition = obj.calculateNextPosition({
        getObjPosition: (obj: Obj) => this.#objPositions.get(obj)!,
        ticksInterval: this.ticksInterval,
      });
      this.#objNextPositions.set(obj, nextPosition);
    });

    // move
    this.#objs.forEach((obj) => {
      this.#objPositions.set(obj, this.#objNextPositions.get(obj)!);
    });

    // statistic
    // time
    this.#statistic.add(
      STATISTIC_TIME,
      (prevItem) => (prevItem ?? 0) + this.ticksInterval
    );
    // time speed
    const timeFromLastStatisticTime = Date.now() - this.#lastStatisticTime.real;
    if (timeFromLastStatisticTime > 1000) {
      this.#statistic.add(
        STATISTIC_TIME_SPEED,
        (1000 *
          (this.statistic[STATISTIC_TIME]! - this.#lastStatisticTime.space)) /
          timeFromLastStatisticTime
      );
      this.#lastStatisticTime.real += timeFromLastStatisticTime;
      this.#lastStatisticTime.space = this.statistic[STATISTIC_TIME]!;
    }

    this.#tickNextStartTime += this.#ticksIntervalMs;

    this.#requestTick();
  }

  #requestDraw(): void {
    if (this.#state === 'stopped') return;

    this.#drawTimeout = requestAnimationFrame(() => this.#drawTick());
  }

  #drawTick(): void {
    this.#draw();
    this.#requestDraw();
  }

  #draw(): void {
    if (!this.#canvasComponent) return;

    const canvasComponent = this.#canvasComponent;
    // clean
    canvasComponent.clean();
    // draw
    this.#objs.forEach((obj) =>
      obj.draw({
        getObjPosition: (obj: Obj) => this.#objPositions.get(obj)!,
        cx: (x: number) => x * canvasComponent.scaleX,
        cy: (y: number) => (canvasComponent.sizeY - y) * canvasComponent.scaleY,
        cdx: (dx: number, minPixels?: number) =>
          this.#minValue(dx * canvasComponent.scaleX, minPixels ?? 0),
        cdy: (dy: number, minPixels?: number) =>
          this.#minValue(-dy * canvasComponent.scaleY, minPixels ?? 0),
        cd: (d: number, minPixels?: number) =>
          this.#minValue(d * canvasComponent.scaleX, minPixels ?? 0),
        ctx: canvasComponent.ctx,
        theme: canvasComponent.theme,
      })
    );
  }

  #minValue(value: number, minValue: number): number {
    if (value >= 0) {
      return Math.max(value, minValue);
    }
    return Math.min(value, minValue);
  }
}
