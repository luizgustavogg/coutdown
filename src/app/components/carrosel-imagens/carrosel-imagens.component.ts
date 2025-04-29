import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrosel-imagens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrosel-imagens.component.html',
  styleUrls: ['./carrosel-imagens.component.scss']
})
export class CarroselImagensComponent {
  @Input() images: string[] = [];
}
