import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Space } from 'tick-draw';
import { Dog } from './dog';

@Component({
  selector: 'lab-tick-draw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tick-draw.component.html',
  styleUrls: ['./tick-draw.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickDrawComponent implements OnDestroy {
  @ViewChild('canvas', { read: ElementRef })
  private canvasEl!: ElementRef<HTMLCanvasElement>;

  private space: Space | null = null;

  data: { [num: number]: { l: number } | undefined } = {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this.stop();
  }

  start(): void {
    this.stop();

    this.space = new Space(this.canvasEl.nativeElement, 10, 10, 0.005);

    const dog1 = new Dog(1, this.statDogs.bind(this, 1));
    const dog2 = new Dog(2, this.statDogs.bind(this, 2));
    const dog3 = new Dog(3, this.statDogs.bind(this, 3));
    const dog4 = new Dog(4, this.statDogs.bind(this, 4));
    dog1.follow(dog2);
    dog2.follow(dog3);
    dog3.follow(dog4);
    dog4.follow(dog1);

    this.space.addObject(dog1, { x: 0, y: 0 });
    this.space.addObject(dog2, { x: 10, y: 0 });
    this.space.addObject(dog3, { x: 10, y: 10 });
    this.space.addObject(dog4, { x: 0, y: 10 });

    this.space.setTheme({
      color: getComputedStyle(this.canvasEl.nativeElement).color,
      bgColor: getComputedStyle(this.canvasEl.nativeElement).backgroundColor,
    });

    this.space.start();
  }

  stop(): void {
    if (this.space) {
      this.space.stop();
      this.space = null;
    }
  }

  private statDogs(num: number, data: { l: number }): void {
    this.data = {
      ...this.data,
      [num]: data,
    };
    this.cdr.markForCheck();
  }
}
