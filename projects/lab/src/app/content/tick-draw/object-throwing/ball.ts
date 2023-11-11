import {
  Obj,
  ObjCalculateNextPositionParameters,
  ObjDrawParameters,
  ObjStopCheckParameters,
  Position,
  Statistic,
} from 'tick-draw';

export class Ball implements Obj {
  #v = 0;
  #statistic = new Statistic<{ speed: number; altitude: number }>();

  get statistic() {
    return this.#statistic.items;
  }

  shouldStop({ getObjPosition }: ObjStopCheckParameters): boolean {
    return getObjPosition(this).y <= 0;
  }

  calculateNextPosition({
    ticksInterval,
    getObjPosition,
  }: ObjCalculateNextPositionParameters): Position {
    this.#v += ticksInterval * 9.8;
    const r = {
      x: getObjPosition(this).x,
      y: getObjPosition(this).y - ticksInterval * this.#v,
    };
    this.#statistic.add('speed', this.#v);
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
