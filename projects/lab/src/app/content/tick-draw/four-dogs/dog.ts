import {
  Obj,
  ObjCalculateNextPositionParameters,
  ObjDrawParameters,
  ObjStopCheckParameters,
  Position,
  Statistic,
} from 'tick-draw';

export class Dog implements Obj {
  private followDog!: Dog;

  #statistic = new Statistic<{ l: number }>();

  get statistic() {
    return this.#statistic.items;
  }

  constructor(private num: number) {}

  shouldStop({ getObjPosition }: ObjStopCheckParameters): boolean {
    const me = getObjPosition(this);
    const follow = getObjPosition(this.followDog);
    return (
      Math.sqrt(Math.pow(me.x - follow.x, 2) + Math.pow(me.y - follow.y, 2)) <
      0.2
    );
  }

  calculateNextPosition({
    getObjPosition,
    ticksInterval: t,
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

    this.#statistic.add(
      'l',
      (prev) =>
        (prev ?? 0) +
        Math.sqrt(
          Math.pow(nextP.x - currentPosition.x, 2) +
            Math.pow(nextP.y - currentPosition.y, 2)
        )
    );

    return nextP;
  }

  draw({
    ctx,
    cx,
    cy,
    cd,
    cdx,
    cdy,
    getObjPosition,
    theme,
  }: ObjDrawParameters): void {
    const { x, y } = getObjPosition(this);
    ctx.beginPath();
    ctx.strokeStyle = theme.color;
    ctx.lineWidth = 1;
    ctx.arc(cx(x), cy(y), cd(0.1, 10), 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.font = `${cd(0.14, 14)}px sans-serif`;
    ctx.strokeText(
      String(this.num),
      cx(x) - cdx(0.04, 4),
      cy(y) - cdy(0.05, 5)
    );
  }

  follow(dog: Dog): void {
    this.followDog = dog;
  }
}
