import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CodeComponent,
  HeadingComponent,
  ParagraphComponent,
  TitleComponent,
} from 'ui';

@Component({
  selector: 'lab-git',
  standalone: true,
  imports: [
    CommonModule,
    CodeComponent,
    TitleComponent,
    HeadingComponent,
    ParagraphComponent,
  ],
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitComponent {}
