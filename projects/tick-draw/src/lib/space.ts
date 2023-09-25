import { DrawTheme, Position } from './models';
import { Obj } from './obj';

const MAX_TICK_DIRECT_CALLS = 25;

export class Space {
  private readonly objs: Obj[] = [];
  private readonly objPositions = new WeakMap<Obj, Position>();
  private readonly objNextPositions = new WeakMap<Obj, Position>();
  private readonly ticksIntervalMs = this.ticksInterval * 1000;

  private state: 'stopped' | 'started' = 'stopped';
  private startTime: number = Date.now();
  private tickNextStartTime: number = Date.now();
  private tickDirectCalls: number = 0;
  private ctx!: CanvasRenderingContext2D;
  private width!: number;
  private height!: number;
  private scaleX!: number;
  private scaleY!: number;

  private theme: DrawTheme = {
    bgColor: '#ffffff',
    color: '#000000',
  };

  constructor(
    private readonly canvasEl: HTMLCanvasElement,
    private readonly metersX: number,
    private readonly metersY: number,
    private readonly ticksInterval: number
  ) {}

  setTheme(theme: DrawTheme): void {
    this.theme = theme;
  }

  addObject(obj: Obj, { x, y }: Position) {
    this.objs.push(obj);
    this.objPositions.set(obj, { x: x, y: y });
  }

  start(): void {
    this.prepareDrawing();

    this.state = 'started';

    this.startTime = Date.now();
    this.tickNextStartTime = this.startTime;
    this.tickDirectCalls = 0;
    this.requestTick();

    this.requestDraw();
  }

  stop(): void {
    this.state = 'stopped';
  }

  private prepareDrawing() {
    const ctx = this.canvasEl.getContext('2d');
    if (!ctx) throw new Error('Cannot draw!');

    this.ctx = ctx;

    this.canvasEl.width = 0;
    this.canvasEl.height = 0;

    this.width = this.canvasEl.clientWidth;
    this.height = this.canvasEl.clientHeight;

    this.scaleX = this.width / this.metersX;
    this.scaleY = this.height / this.metersY;

    // adjust canvas size
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;
  }

  private requestTick(): void {
    if (this.state === 'stopped') return;

    const now =
      this.tickDirectCalls === MAX_TICK_DIRECT_CALLS
        ? this.tickNextStartTime
        : Date.now();

    if (now > this.tickNextStartTime) {
      this.tickDirectCalls++;
      this.tick();
      return;
    }

    this.tickDirectCalls = 0;
    setTimeout(() => this.tick(), this.tickNextStartTime - now);
  }

  private tick(): void {
    // prepare
    this.objs.forEach((obj) => {
      const nextPosition = obj.calculateNextPosition({
        getObjPosition: getPosition.bind(null, this.objPositions),
        ticksInterval: this.ticksInterval,
        stop: this.stop.bind(this),
      });
      this.objNextPositions.set(obj, nextPosition);
    });
    // move
    this.objs.forEach((obj) => {
      this.objPositions.set(obj, getPosition(this.objNextPositions, obj));
    });

    this.tickNextStartTime += this.ticksIntervalMs;

    this.requestTick();
  }

  private requestDraw(): void {
    if (this.state === 'stopped') return;

    requestAnimationFrame(() => this.draw());
  }

  private draw(): void {
    // clean
    this.ctx.fillStyle = this.theme.bgColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
    // draw
    this.objs.forEach((obj) =>
      obj.draw({
        getObjPosition: getPosition.bind(null, this.objPositions),
        ctx: this.ctx,
        scale: { x: this.scaleX, y: this.scaleY },
        theme: this.theme,
      })
    );

    this.requestDraw();
  }
}

function getPosition(map: WeakMap<Obj, Position>, obj: Obj): Position {
  return map.get(obj)!;
}
