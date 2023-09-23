import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Obj,
  ObjCalculateNextPositionParameters,
  ObjDrawParameters,
  Position,
  Space,
} from 'tick-draw';

@Component({
  selector: 'lab-tick-draw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tick-draw.component.html',
  styleUrls: ['./tick-draw.component.scss'],
})
export class TickDrawComponent implements OnDestroy {
  @ViewChild('canvas', { read: ElementRef })
  private canvasEl!: ElementRef<HTMLCanvasElement>;

  private space: Space | null = null;

  start(): void {
    this.stop();

    this.space = new Space(this.canvasEl.nativeElement, 10, 10, 100);

    const dog1 = new Dog();
    const dog2 = new Dog();
    const dog3 = new Dog();
    const dog4 = new Dog();
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

  ngOnDestroy(): void {
    this.stop();
  }

  stop(): void {
    if (this.space) {
      this.space.stop();
      this.space = null;
    }
  }
}

class Dog extends Obj {
  private followDog: Dog = this;
  private l = 0;

  calculateNextPosition({
    getObjPosition,
    ticksInSecond,
    stop,
  }: ObjCalculateNextPositionParameters): Position {
    const currentPosition = getObjPosition(this);
    const followPosition = getObjPosition(this.followDog);

    const v = 1; // speed 1 m/s
    const t = 1 / ticksInSecond;

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

    console.log(this.l);

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
  }

  follow(dog: Dog): void {
    this.followDog = dog;
  }
}

class Test extends Obj {
  calculateNextPosition({
    getObjPosition,
    ticksInSecond,
  }: ObjCalculateNextPositionParameters): Position {
    const currentPosition = getObjPosition(this);
    const t = 1 / ticksInSecond;
    return {
      x: currentPosition.x + t,
      y: currentPosition.y + t,
    };
  }
  draw({ getObjPosition, theme, ctx, scale }: ObjDrawParameters): void {
    const { x, y } = getObjPosition(this);
    ctx.beginPath();
    ctx.strokeStyle = theme.color;
    ctx.lineWidth = 1;
    ctx.arc(x * scale.x, y * scale.y, 0.1 * scale.x, 0, Math.PI * 2);
    ctx.stroke();
  }
}
