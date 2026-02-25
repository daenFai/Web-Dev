import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDescription } from './product-description';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductsComponent,ProductListComponent,CommonModule,RouterModule],
  template:`
    <main>
      <header class="brand-name">
        
      </header>
    <ul>
    
  <li><a routerLink="/category/Computers">Computers</a></li>
  <li><a routerLink="/category/Phones">Phones</a></li>
  <li><a routerLink="/category/TVs">TVs</a></li>
  <li><a routerLink="/category/Refrigerators">Refrigerators</a></li>
  </ul>
      <section class="content">

 
        <router-outlet></router-outlet>
      </section>
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaspi';


}
