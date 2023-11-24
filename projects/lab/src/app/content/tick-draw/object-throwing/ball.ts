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
  #airDrag = false;
  #airDensity = 0;
  #frontArea = 0;
  #c = 0;
  #mass = 0;

  #statistic = new Statistic<{
    speedX: number;
    speedY: number;
    altitude: number;
    x: number;
  }>();

  get statistic() {
    return this.#statistic.items;
  }

  constructor({
    vx,
    vy,
    airDrag,
    airDensity,
    c,
    frontArea,
    mass,
  }: {
    vx: number;
    vy: number;
    airDrag: boolean;
    airDensity: number;
    c: number;
    frontArea: number;
    mass: number;
  }) {
    this.#vx = vx;
    this.#vy = vy;
    this.#airDrag = airDrag;
    this.#airDensity = airDensity;
    this.#frontArea = frontArea;
    this.#c = c;
    this.#mass = mass;
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
    let dvx = 0;
    let dvy = 0;
    if (this.#airDrag) {
      const v = Math.sqrt(Math.pow(this.#vx, 2) + Math.pow(this.#vy, 2));
      const dv =
        (ticksInterval *
          (0.5 * this.#c * this.#frontArea * this.#airDensity * v * v)) /
        this.#mass;
      const kv = Math.abs(this.#vx / this.#vy);
      dvy = dv / (kv + 1);
      dvx = kv * dvy;
    }

    this.#vy -= ticksInterval * 9.8 + (this.#vy > 0 ? 1 : -1) * dvy;
    this.#vx -= dvx;
    const r = {
      x: getObjPosition(this).x + ticksInterval * this.#vx,
      y: getObjPosition(this).y + ticksInterval * this.#vy,
    };
    this.#statistic.add('speedX', this.#vx);
    this.#statistic.add('speedY', this.#vy);
    this.#statistic.add('altitude', r.y);
    this.#statistic.add('x', r.x);

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
