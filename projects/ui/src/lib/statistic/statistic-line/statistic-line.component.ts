import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-statistic-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistic-line.component.html',
  styleUrls: ['./statistic-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticLineComponent {}
