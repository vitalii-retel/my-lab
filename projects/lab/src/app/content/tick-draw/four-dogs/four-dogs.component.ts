import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent, Space, statisticObservable } from 'tick-draw';
import { Dog } from './dog';
import { map } from 'rxjs';
import { StatisticComponent, StatisticLineComponent } from 'ui';

@Component({
  selector: 'lab-four-dogs',
  standalone: true,
  imports: [
    CommonModule,
    CanvasComponent,
    StatisticComponent,
    StatisticLineComponent,
  ],
  templateUrl: './four-dogs.component.html',
  styleUrls: ['./four-dogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourDogsComponent implements OnDestroy {
  #space: Space | undefined;
  #dog1: Dog | undefined;
  #dog2: Dog | undefined;
  #dog3: Dog | undefined;
  #dog4: Dog | undefined;

  @ViewChild(CanvasComponent)
  canvasComponent!: CanvasComponent;

  statistic$ = statisticObservable(() => ({
    space: this.#space?.statistic ?? {},
    dog1: this.#dog1?.statistic ?? {},
    dog2: this.#dog1?.statistic ?? {},
    dog3: this.#dog1?.statistic ?? {},
    dog4: this.#dog1?.statistic ?? {},
  }));

  started$ = this.statistic$.pipe(map((s) => s.space.on));

  constructor(private cdr: ChangeDetectorRef) {}

  reset(): void {
    this.stop();
    this.#spaceDispose();

    this.#space = new Space(0.005);
    this.#dog1 = new Dog(1);
    this.#dog2 = new Dog(2);
    this.#dog3 = new Dog(3);
    this.#dog4 = new Dog(4);
    this.#dog1.follow(this.#dog2);
    this.#dog2.follow(this.#dog3);
    this.#dog3.follow(this.#dog4);
    this.#dog4.follow(this.#dog1);

    this.#space.addObject(this.#dog1, { x: 0, y: 10 });
    this.#space.addObject(this.#dog2, { x: 10, y: 10 });
    this.#space.addObject(this.#dog3, { x: 10, y: 0 });
    this.#space.addObject(this.#dog4, { x: 0, y: 0 });

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
    this.#dog1 = undefined;
    this.#dog2 = undefined;
    this.#dog3 = undefined;
    this.#dog4 = undefined;
  }
}
