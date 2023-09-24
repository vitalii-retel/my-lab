import {
  Obj,
  ObjCalculateNextPositionParameters,
  ObjDrawParameters,
  Position,
} from 'tick-draw';

export class Dog extends Obj {
  private followDog: Dog = this;
  private l = 0;

  constructor(
    private num: number,
    private statisticFn: (statistic: { l: number }) => void = () => {}
  ) {
    super();
  }

  calculateNextPosition({
    getObjPosition,
    ticksInterval: t,
    stop,
  }: ObjCalculateNextPositionParameters): Position {
    const currentPosition = getObjPosition(this);
    const followPosition = getObjPosition(this.followDog);

    const v = 1; // speed 1 m/s

    const l = Math.sqrt(
      Math.pow(followPosition.x - currentPosition.x, 2) +
        Math.pow(followPosition.y - currentPosition.y, 2)
    );
    const tl = l / v;
    const nextP = {
      x: currentPosition.x + ((followPosition.x - currentPosition.x) / tl) * t,
      y: currentPosition.y + ((followPosition.y - currentPosition.y) / tl) * t,
    };

    this.l += Math.sqrt(
      Math.pow(nextP.x - currentPosition.x, 2) +
        Math.pow(nextP.y - currentPosition.y, 2)
    );

    if (l < 2 * v * t) stop();

    return nextP;
  }

  draw({ getObjPosition, theme, ctx, scale }: ObjDrawParameters): void {
    const { x, y } = getObjPosition(this);
    ctx.beginPath();
    ctx.strokeStyle = theme.color;
    ctx.lineWidth = 1;
    ctx.arc(x * scale.x, y * scale.y, 0.1 * scale.x, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.font = `${Math.round(0.16 * scale.y)}px sans-serif`;
    ctx.strokeText(
      String(this.num),
      (x - 0.045) * scale.x,
      (y + 0.06) * scale.y
    );

    this.statisticFn({ l: this.l });
  }

  follow(dog: Dog): void {
    this.followDog = dog;
  }
}
