import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { Canvas, DrawTheme } from '../models';

@Component({
  selector: 'tick-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent
  implements Canvas, AfterViewInit, OnDestroy, OnChanges
{
  private destroyed$ = new Subject<void>();

  @Input({ required: true })
  sizeX: number = 1;

  @Input({ required: true })
  sizeY: number = 1;

  @ViewChild('canvas', { read: ElementRef })
  canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;

  get aspectRatio() {
    return {
      'aspect-ratio': `${this.sizeX}/${this.sizeY}`,
    };
  }

  get canvasEl(): HTMLCanvasElement {
    return this.canvas.nativeElement;
  }

  private _scaleX = 1;
  get scaleX(): number {
    return this._scaleX;
  }

  private _scaleY = 1;
  get scaleY(): number {
    return this._scaleY;
  }

  get theme(): DrawTheme {
    const style = getComputedStyle(this.canvasEl);
    return {
      color: style.color,
      bgColor: style.backgroundColor,
    };
  }

  get width(): number {
    return this.canvasEl.clientWidth;
  }

  get height(): number {
    return this.canvasEl.clientHeight;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnChanges(): void {
    if (!this.canvas) return;
    this.adjustSizes();
  }

  ngAfterViewInit(): void {
    this.initiateCanvasSizeAdjuster();
    this.initiateCanvasContext();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  clean(): void {
    this.ctx.fillStyle = this.theme.bgColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  private initiateCanvasSizeAdjuster(): void {
    const win = this.document.defaultView;
    if (!win) return;
    fromEvent(win, 'resize')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.adjustSizes());
    this.adjustSizes();
  }

  private adjustSizes(): void {
    this.canvasEl.width = 0;
    this.canvasEl.height = 0;

    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;

    // TODO find out why it fixes the problem with setting the size
    // when setting the first time the real size is still different, because of height: 100% css style
    // the second time setting the size fixes the problem somehow
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;

    this._scaleX = this.width / this.sizeX;
    this._scaleY = this.height / this.sizeY;
  }

  private initiateCanvasContext(): void {
    const ctx = this.canvasEl.getContext('2d');
    if (!ctx) {
      throw new Error('Cannot initiate canvas context');
    }
    this.ctx = ctx;
  }
}
