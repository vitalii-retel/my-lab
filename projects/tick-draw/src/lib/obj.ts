import { DrawTheme, Position } from './models';

export interface ObjCalculateNextPositionParameters {
  getObjPosition: (obj: Obj) => Position;
  ticksInterval: number;
  stop: () => void;
}

export interface ObjDrawParameters {
  getObjPosition: (obj: Obj) => Position;
  theme: DrawTheme;
  ctx: CanvasRenderingContext2D;
  scale: {
    x: number;
    y: number;
  };
}

export abstract class Obj {
  abstract calculateNextPosition(
    params: ObjCalculateNextPositionParameters
  ): Position;

  abstract draw(params: ObjDrawParameters): void;
}
