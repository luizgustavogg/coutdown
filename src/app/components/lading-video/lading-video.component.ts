import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lading-video',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './lading-video.component.html',
  styleUrl: './lading-video.component.scss'
})
export class LadingVideoComponent {
  @Input() ladingVideo! : string
}
