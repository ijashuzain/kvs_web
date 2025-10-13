import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  imports: [NgFor],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {

  categories = ['Dining Tables', 'Chairs', 'Study Tables', 'Wooden Beds'];
  selectedCategory = 'Chairs';

  products = [
    { name: 'Comfort Lounge Sofa', model: 'Modern & Stylish', image: 'assets/products/sofa.png', category: 'Chairs' },
    { name: 'Comfort Lounge Table', model: 'Modern & Stylish', image: 'assets/products/table.png', category: 'Chairs' },
    { name: 'Comfort Lounge Chair', model: 'Modern & Stylish', image: 'assets/products/chair.png', category: 'Chairs' },
    { name: 'Comfort Lounge Table', model: 'Modern & Stylish', image: 'assets/products/table1.png', category: 'Chairs' },
    { name: 'Comfort Lounge Bed', model: 'Modern & Stylish', image: 'assets/products/bed.png', category: 'Chairs' }
  ];

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

}
