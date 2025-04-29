import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import confetti from 'canvas-confetti';
import Swiper from 'swiper';
import { CarroselImagensComponent } from '../carrosel-imagens/carrosel-imagens.component';
import { LadingImageComponent } from '../lading-image/lading-image.component';
import { LadingVideoComponent } from '../lading-video/lading-video.component';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CarroselImagensComponent,
    LadingImageComponent,
    LadingVideoComponent,
  ],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy, AfterViewInit {
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  mostrarSwiper: boolean = false;
  mensagemAtiva: boolean = false;
  private intervalId: any;
  private confettiFired: boolean = false;
  liberarLanding: boolean = false;

  mostrarModal: boolean = true;
  respostaUsuario: string = '';
  erroResposta: boolean = false;
  respostaCorreta: string = '123'; // <<< Define aqui a resposta correta

  imagensCarrosel: string[] = [
    // link das imagens
    'https://picsum.photos/id/10/800/600',
    'https://picsum.photos/id/11/800/600',
    'https://picsum.photos/id/12/800/600',
    'https://picsum.photos/id/13/800/600',
    'https://picsum.photos/id/14/800/600',
  ];

  ladingImage: string = 'https://picsum.photos/id/32/800/600';

  ladingVideo: string = 'https://cdn.pixabay.com/video/2025/03/29/268528_large.mp4'; // link do video

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.startCountdown();
    });
  }

  ngAfterViewInit() {
    if (this.mostrarSwiper) {
      this.initSwiper();
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();

      if (diff <= 0 && !this.confettiFired) {
        clearInterval(this.intervalId);
        this.ngZone.run(() => {
          this.hours = '00';
          this.minutes = '00';
          this.seconds = '00';
          this.fireConfetti();
          this.mostrarSwiper = true;
          this.mensagemAtiva = true;
          setTimeout(() => this.initSwiper(), 0);
        });
        this.confettiFired = true;
        this.liberarLanding = true;
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      this.ngZone.run(() => {
        this.hours = this.pad(hrs);
        this.minutes = this.pad(mins);
        this.seconds = this.pad(secs);
      });
    }, 1000);
  }

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  fireConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 100 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount: Math.floor(particleCount),
        origin: { x: Math.random(), y: Math.random() },
      });
    }, 250);
  }

  initSwiper() {
    new Swiper('.swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      effect: 'cube',
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  }

  validarResposta() {
    const respostaNormalizada = this.respostaUsuario.trim().toLowerCase();
    if (respostaNormalizada === this.respostaCorreta.toLowerCase()) {
      this.mostrarModal = false; // Fechar o modal
      this.erroResposta = false; // Limpar erro
    } else {
      this.erroResposta = true; // Mostra mensagem de erro
    }
  }
}
