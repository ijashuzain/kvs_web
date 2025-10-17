import { ScrollService } from './service/scroll.service';
import { DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
interface CollectionItem {
  id: number;
  name: string;
  image: string; // Placeholder for image URL
}

@Component({
  selector: 'app-home',
  imports: [NgFor , DecimalPipe , NgIf , ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  @ViewChild('collectionsContainer', { static: false }) collectionsContainer!: ElementRef;
  @ViewChild('productsContainer', { static: false }) productsContainer!: ElementRef;

  currentIndex = {
    collections: 0,
    products: 0,
  };

  cardsInView = 3;
  scrollStep = 1;

  constructor(private scrollHelper: ScrollService) {}

    collections = [
    { id: 1, name: 'Chairs', image: 'assets/images/chair.png' },
    { id: 2, name: 'Tables', image: 'assets/images/table.png' },
    { id: 3, name: 'Sofas', image: 'assets/images/sofa.png' },
    { id: 4, name: 'Bedroom Set', image: 'assets/images/bedroom.jpg' },
    { id: 5, name: 'Chairs', image: 'assets/images/chair.png' },
    { id: 1, name: 'Chairs', image: 'assets/images/chair.png' },
    { id: 2, name: 'Tables', image: 'assets/images/table.png' },
    { id: 3, name: 'Sofas', image: 'assets/images/sofa.png' },
    { id: 4, name: 'Bedroom Set', image: 'assets/images/bedroom.jpg' },
    { id: 5, name: 'Chairs', image: 'assets/images/chair.png' }
  ];

    products = [
    {
      name: 'Comfort Lounge Sofa',
      description: 'Modern 3-seater sofa',
      image: 'assets/images/chair.png',
      favorite: true
    },
    {
      name: 'Comfort Lounge Sofa',
      description: 'Modern 3-seater sofa',
      image: 'assets/images/table.png',
      favorite: false
    },
    {
      name: 'Comfort Lounge Sofa',
      description: 'Modern 3-seater sofa',
      image: 'assets/images/sofa.png',
      favorite: false
    },
    {
      name: 'Comfort Lounge Sofa',
      description: 'Modern 3-seater sofa',
      image: 'assets/images/bedroom.jpg',
      favorite: false
    },
    {
      name: 'Comfort Lounge Sofa',
      description: 'Modern 3-seater sofa',
      image: 'assets/images/bedroom.jpg',
      favorite: false
    },
    {
      name: 'Comfort Lounge Sofa',
      description: 'Modern 3-seater sofa',
      image: 'assets/images/sofa.png',
      favorite: false
    },
    {
      name: 'Comfort Lounge Sofa',
      description: 'Modern 3-seater sofa',
      image: 'assets/images/bedroom.jpg',
      favorite: false
    },
    {
      name: 'Comfort Lounge Sofa',
      description: 'Modern 3-seater sofa',
      image: 'assets/images/bedroom.jpg',
      favorite: false
    }
  ];



    ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true
    });
    
    // Log screen size
    this.logScreenSize();
  }

  private logScreenSize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    
    console.log('=== SCREEN SIZE INFO ===');
    console.log('Window size:', width + 'x' + height);
    console.log('Screen size:', screenWidth + 'x' + screenHeight);
    console.log('Device pixel ratio:', window.devicePixelRatio);
    
    // Determine screen category
    let category = '';
    if (width <= 767) {
      category = 'Mobile';
    } else if (width <= 1024) {
      category = 'Tablet';
    } else if (width <= 1439) {
      category = 'Desktop';
    } else if (width <= 2559) {
      category = 'Large Desktop';
    } else {
      category = '4K/Ultra Large';
    }
    
    console.log('Screen category:', category);
    console.log('========================');
  }



  next(section: 'collections' | 'products'): void {
    const container = this.getContainer(section);
    const total = section === 'collections' ? this.collections.length : this.products.length;

    this.currentIndex[section] = this.scrollHelper.next(
      container,
      this.currentIndex[section],
      this.cardsInView,
      this.scrollStep,
      total
    );
  }

  prev(section: 'collections' | 'products'): void {
    const container = this.getContainer(section);
    this.currentIndex[section] = this.scrollHelper.prev(container, this.currentIndex[section], this.scrollStep);
  }

  private getContainer(section: 'collections' | 'products'): HTMLElement {
    return section === 'collections'
      ? this.collectionsContainer.nativeElement
      : this.productsContainer.nativeElement;
  }

  // Swipe events for both sections
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.scrollHelper.onTouchStart(event);
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    const touchedEl = (event.target as HTMLElement).closest('.cards');
    if (!touchedEl) return;

    const isCollection = touchedEl.classList.contains('cards') && touchedEl.closest('.collections-section');
    const section = isCollection ? 'collections' : 'products';

    this.scrollHelper.onTouchEnd(event, touchedEl as HTMLElement, () => this.next(section), () => this.prev(section));
  }
}
