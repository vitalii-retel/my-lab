export interface Position {
  x: number;
  y: number;
}

export interface DrawTheme {
  color: string;
  bgColor: string;
}

export interface Canvas {
  ctx: CanvasRenderingContext2D;
  sizeX: number;
  sizeY: number;
  scaleX: number;
  scaleY: number;
  theme: DrawTheme;
  clean: () => void;
}
