import { Component,OnInit,EventEmitter,Input ,Output } from '@angular/core';
import { ProductDescription } from '../product-description';
import { ProductsComponent } from '../products/products.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [ProductsComponent,CommonModule],
  template:`
  <main>
    <header class="brand-name">
      
    </header>
    <section class="content">
      <app-products [products]="filteredProducts"></app-products> 
    </section>
  </main>`,

  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
 @Output() productDeleted = new EventEmitter<number>();
  categoryName: string = 'All';
  filteredProducts: ProductDescription[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('categoryName') || 'All';
      console.log("Current Category:", this.categoryName);
      this.filterProducts();
    });
  };
  filterProducts() {
    if (this.categoryName === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === this.categoryName);
    }
  }
  onDeleteProduct(productId: number) {
    console.log("Deleting product with ID:", productId);
    this.productDeleted.emit(productId);  
  }
  baseUrl="https://resources.cdn-kaspi.kz/img/m/p"
  products: ProductDescription [] = [
    {
      id: 0,
      name: 'Macbook pro 14',
      description: '13 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3q_IPJgyaTW7irwht2sgwomfcwcNX8F2y1g&s`,
      rating: '3 stars',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: ''
    },
    {
      id: 1,
      name: 'Macbook pro 13',
      description: '14 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74nioicpi59XtCYn7DgWSFH_vZ9ypaSULTuWJB6CEmn5e5nQvqUXa3Z5OSpF6OqD-MyY&usqp=CAU`,
      rating: '4 stars',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcr3-117948964/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Computers'
    },
    {
      id: 2,
      name: 'Samsung s25',
      description: '5 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ESylSrwoNbhNBiNZzzzIh0qLMBePrKBcXw&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Phones'
    },
    {
      id: 3,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Computers'
    }
    ,
    {
      id: 4,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Computers'
    },
    {
      id: 5,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Computers'
    },
    {
      id: 6,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Computers'
    },
    {
      id: 7,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Computers'
    },
    {
      id: 8,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Computers'
    },
    {
      id: 9,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE',
      category: 'Computers'
    }
  ];
}
