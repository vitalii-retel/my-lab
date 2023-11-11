import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent, statisticObservable } from 'tick-draw';
import { Space } from 'projects/tick-draw/src/public-api';
import { Ball } from './ball';
import { map } from 'rxjs';
import { StatisticComponent, StatisticLineComponent } from 'ui';

@Component({
  selector: 'lab-object-throwing',
  standalone: true,
  imports: [
    CommonModule,
    CanvasComponent,
    StatisticComponent,
    StatisticLineComponent,
  ],
  templateUrl: './object-throwing.component.html',
  styleUrls: ['./object-throwing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectThrowingComponent implements AfterViewInit, OnDestroy {
  #space: Space | undefined;
  #ball: Ball | undefined;

  @ViewChild(CanvasComponent)
  canvasComponent!: CanvasComponent;

  statistic$ = statisticObservable(() => ({
    space: this.#space?.statistic ?? {},
    ball: this.#ball?.statistic ?? {},
  }));

  started$ = this.statistic$.pipe(map((s) => s.space.on));

  constructor(private cdr: ChangeDetectorRef) {}

  reset(): void {
    this.#spaceDispose();

    this.#space = new Space(0.005);
    this.#ball = new Ball();

    this.#space.addObject(this.#ball, { x: 100, y: 1500 });

    this.#space.setCanvas(this.canvasComponent);
  }

  start(): void {
    this.#space?.start();
  }

  stop(): void {
    this.#space?.stop();
  }

  ngAfterViewInit(): void {
    this.reset();
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.#spaceDispose();
  }

  #spaceDispose(): void {
    this.stop();
    this.#space = undefined;
    this.#ball = undefined;
  }
}
