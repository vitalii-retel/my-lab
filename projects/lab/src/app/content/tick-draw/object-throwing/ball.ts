import {
  Obj,
  ObjCalculateNextPositionParameters,
  ObjDrawParameters,
  ObjStopCheckParameters,
  Position,
  Statistic,
} from 'tick-draw';

export class Ball implements Obj {
  #vx = 0;
  #vy = 0;
  #statistic = new Statistic<{
    speedX: number;
    speedY: number;
    altitude: number;
  }>();

  get statistic() {
    return this.#statistic.items;
  }

  constructor({ vx, vy }: { vx: number; vy: number }) {
    this.#vx = vx;
    this.#vy = vy;
    this.#statistic.add('speedX', this.#vx);
    this.#statistic.add('speedY', this.#vy);
  }

  shouldStop({ getObjPosition }: ObjStopCheckParameters): boolean {
    return getObjPosition(this).y < 0;
  }

  calculateNextPosition({
    ticksInterval,
    getObjPosition,
  }: ObjCalculateNextPositionParameters): Position {
    this.#vy -= ticksInterval * 9.8;
    const r = {
      x: getObjPosition(this).x + ticksInterval * this.#vx,
      y: getObjPosition(this).y + ticksInterval * this.#vy,
    };
    this.#statistic.add('speedX', this.#vx);
    this.#statistic.add('speedY', this.#vy);
    this.#statistic.add('altitude', r.y);

    return r;
  }

  draw({ ctx, cx, cy, cd, getObjPosition, theme }: ObjDrawParameters): void {
    const { x, y } = getObjPosition(this);
    ctx.beginPath();
    ctx.strokeStyle = theme.color;
    ctx.lineWidth = 1;
    ctx.arc(cx(x), cy(y), cd(0.1, 5), 0, Math.PI * 2);
    ctx.stroke();
  }
}
