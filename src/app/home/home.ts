import { AfterViewInit, Component } from '@angular/core';
import {Header} from '../shared/components/header/header';
import {Preloader} from '../shared/components/preloader/preloader';
import {Introduction} from './components/introduction/introduction';
import {About} from './components/about/about';
import {Services} from './components/offer/services';
import {Projet} from './components/projet/projet';
import {Resume} from './components/resume/resume';
import {Contact} from './components/contact/contact';
import {Footer} from '../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Preloader,
    Introduction,
    About,
    Services,
    Projet,
    Resume,
    Contact,
    Footer
  ],
  templateUrl: './home.html'
})
export class Home implements AfterViewInit {

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Sections : fade up
    document.querySelectorAll('section:not(.home)').forEach(el => {
      el.classList.add('scroll-reveal');
      observer.observe(el);
    });

    // Cartes projet : scale in
    document.querySelectorAll('.portfolio-item, section.project .box').forEach(el => {
      el.classList.add('scroll-reveal', 'reveal-scale');
      observer.observe(el);
    });

    // Skills : alternance gauche/droite
    document.querySelectorAll('.skill').forEach((el, i) => {
      el.classList.add('scroll-reveal', i % 2 === 0 ? 'reveal-left' : 'reveal-right');
      observer.observe(el);
    });

    // Colonnes résumé : alternance gauche/droite
    document.querySelectorAll('.resume-list').forEach((el, i) => {
      el.classList.add('scroll-reveal', i % 2 === 0 ? 'reveal-left' : 'reveal-right');
      observer.observe(el);
    });
  }
}
