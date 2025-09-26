import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [NgFor , DecimalPipe , NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    collections = [
    { id: 1, title: 'Chairs', image: 'assets/images/chair.png' },
    { id: 2, title: 'Tables', image: 'assets/images/table.png' },
    { id: 3, title: 'Sofas', image: 'assets/images/sofa.png' },
    { id: 4, title: 'Bedroom Set', image: 'assets/images/bedroom.jpg' },
    { id: 5, title: 'Chairs', image: 'assets/images/chair.png' }
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
  }

}
