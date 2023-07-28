import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-2">
      <div class="flex-none font-medium	">
        <ng-content select="[descriptions-title]"></ng-content>:
      </div>
      <div class="flex-grow">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [],
})
export class DescriptionComponent {}
