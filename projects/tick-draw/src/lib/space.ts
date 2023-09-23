import { DrawTheme } from './draw-theme';
import { Obj } from './obj';
import { Position } from './position';

export class Space {
  private objs: Obj[] = [];
  private objPositions = new WeakMap<Obj, Position>();
  private objNextPositions = new WeakMap<Obj, Position>();

  private drawTimeoutId: number | null = null;
  private tickTimeoutId: number | null = null;

  private theme: DrawTheme = {
    bgColor: '#ffffff',
    color: '#000000',
  };

  constructor(
    private canvasEl: HTMLCanvasElement,
    private metersX: number,
    private metersY: number,
    private ticksInSecond: number
  ) {}

  setTheme(theme: DrawTheme): void {
    this.theme = theme;
  }

  addObject(obj: Obj, { x, y }: Position) {
    this.objs.push(obj);
    this.objPositions.set(obj, { x: x, y: y });
  }

  tick(): void {
    // prepare
    this.objs.forEach((obj) => {
      const nextPosition = obj.calculateNextPosition({
        getObjPosition: getPosition.bind(null, this.objPositions),
        ticksInSecond: this.ticksInSecond,
        stop: this.stop.bind(this),
      });
      this.objNextPositions.set(obj, nextPosition);
    });
    // move
    this.objs.forEach((obj) => {
      this.objPositions.set(obj, getPosition(this.objNextPositions, obj));
    });
  }

  start(): void {
    this.requestDraw();
    this.tickTimeoutId = window.setInterval(
      () => this.tick(),
      1000 / this.ticksInSecond
    );
  }

  stop(): void {
    if (this.drawTimeoutId) {
      window.clearTimeout(this.drawTimeoutId);
      this.drawTimeoutId = null;
    }
    if (this.tickTimeoutId) {
      window.clearInterval(this.tickTimeoutId);
      this.tickTimeoutId = null;
    }
  }

  private requestDraw(): void {
    this.drawTimeoutId = window.requestAnimationFrame(() => this.draw());
  }

  private draw(): void {
    const ctx = this.canvasEl.getContext('2d');
    if (!ctx) throw new Error('Cannot draw!');

    const width = this.canvasEl.clientWidth;
    const height = this.canvasEl.clientHeight;

    // adjust canvas size
    this.canvasEl.width = width;
    this.canvasEl.height = height;

    // clean
    ctx.fillStyle = this.theme.bgColor;
    ctx.fillRect(0, 0, width, height);

    this.objs.forEach((obj) =>
      obj.draw({
        getObjPosition: getPosition.bind(null, this.objPositions),
        ctx: ctx,
        scale: { x: width / this.metersX, y: height / this.metersY },
        theme: this.theme,
      })
    );
    this.requestDraw();
  }
}

function getPosition(map: WeakMap<Obj, Position>, obj: Obj): Position {
  const position = map.get(obj);
  if (!position)
    throw new Error(
      'Could not find position for the object. Check your implementations.'
    );
  return position;
}
