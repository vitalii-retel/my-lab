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
import {
  ControlComponent,
  FormComponent,
  InputComponent,
  LabelComponent,
  StatisticComponent,
  StatisticLineComponent,
} from 'ui';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lab-object-throwing',
  standalone: true,
  imports: [
    CommonModule,
    CanvasComponent,
    StatisticComponent,
    StatisticLineComponent,
    FormComponent,
    ControlComponent,
    LabelComponent,
    InputComponent,
    ReactiveFormsModule,
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

  form = new FormGroup({
    angle: new FormControl(60, {
      validators: [Validators.min(0), Validators.max(90), Validators.required],
      nonNullable: true,
    }),
    mass: new FormControl(0.2, {
      validators: [Validators.min(0), Validators.required],
      nonNullable: true,
    }),
    energy: new FormControl(2000, {
      validators: [Validators.min(0), Validators.required],
      nonNullable: true,
    }),
    sizeX: new FormControl(2000, {
      validators: [Validators.min(0), Validators.required],
      nonNullable: true,
    }),
    sizeY: new FormControl(1500, {
      validators: [Validators.min(0), Validators.required],
      nonNullable: true,
    }),
  });

  sizeX: number = this.form.getRawValue().sizeX;
  sizeY: number = this.form.getRawValue().sizeY;

  constructor(private cdr: ChangeDetectorRef) {}

  reset(): void {
    this.#spaceDispose();

    const { mass: m, energy: e, angle, sizeX, sizeY } = this.form.getRawValue();

    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.#space = new Space(0.005);

    const v = Math.sqrt((e * 2) / m);
    this.#ball = new Ball({
      vx: v * Math.cos((angle * Math.PI) / 180),
      vy: v * Math.sin((angle * Math.PI) / 180),
    });

    this.#space.addObject(this.#ball, { x: 0, y: 0 });

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
