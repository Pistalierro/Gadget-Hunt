import {Routes} from '@angular/router';
import {MainLayoutComponent} from '../layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/catalog/catalog.component')
          .then(m => m.CatalogComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('../pages/product/product.component')
          .then(m => m.ProductComponent)
      },
      {
        path: 'cart',
        loadComponent: () => import('../pages/cart/cart.component')
          .then(m => m.CartComponent)
      },
      {
        path: 'checkout',
        loadComponent: () => import('../pages/checkout/checkout.component')
          .then(m => m.CheckoutComponent)
      }
    ]
  },
  {path: '**', redirectTo: ''}
];
