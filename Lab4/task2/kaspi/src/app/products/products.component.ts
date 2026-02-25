

import {Component, Input,EventEmitter,Output} from '@angular/core';
import { ProductDescription } from '../product-description';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() products: ProductDescription[] = [];
  @Output() deleteProduct = new EventEmitter<number>(); 
  shareOnWhatsApp(productLink: string) {
    const message = encodeURIComponent(`Check out this product: ${productLink}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  // Function to share on Telegram
  shareOnTelegram(productLink: string) {
    const message = encodeURIComponent(`Check out this product: ${productLink}`);
    const telegramUrl = `https://t.me/share/url?url=${productLink}&text=${message}`;
    window.open(telegramUrl, '_blank');
  }
  likedProducts: Set<number> = new Set(); 

  likeProduct(productId: number) {
    if (this.likedProducts.has(productId)) {  
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.likes = Math.max((product.likes || 1) - 1, 0);
        this.likedProducts.delete(productId);
      }
    } else {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.likes = (product.likes || 0) + 1;
        this.likedProducts.add(productId);
      }
    }
  }



  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
