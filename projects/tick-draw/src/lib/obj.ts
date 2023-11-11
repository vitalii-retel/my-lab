import { DrawTheme, Position } from './models';

export interface ObjStopCheckParameters {
  getObjPosition: (obj: Obj) => Position;
}

export interface ObjCalculateNextPositionParameters {
  getObjPosition: (obj: Obj) => Position;
  ticksInterval: number;
}

export interface ObjDrawParameters {
  getObjPosition: (obj: Obj) => Position;
  theme: DrawTheme;
  ctx: CanvasRenderingContext2D;
  cx: (x: number) => number;
  cy: (y: number) => number;
  cdx: (dx: number, minPixels?: number) => number;
  cdy: (dy: number, minPixels?: number) => number;
  cd: (d: number, minPixels?: number) => number;
}

export interface Obj {
  shouldStop(params: ObjStopCheckParameters): boolean;
  calculateNextPosition(params: ObjCalculateNextPositionParameters): Position;
  draw(params: ObjDrawParameters): void;
}
