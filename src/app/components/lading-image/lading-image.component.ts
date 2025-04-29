import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lading-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lading-image.component.html',
  styleUrl: './lading-image.component.scss'
})
export class LadingImageComponent {
  @Input() ladingImage! : String
}
