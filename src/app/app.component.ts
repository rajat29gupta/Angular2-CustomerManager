import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerEditComponent } from './customers/customerEdit.component'
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { OverlayComponent } from './overlay/overlay.component';

@Component({ 
  selector: 'app-component',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, OverlayComponent],
})
@RouteConfig([
  { path: '/customers', as: 'Customers', component: CustomersComponent, useAsDefault: true },
  { path: '/customers/:id', as: 'Customer', component: CustomerComponent },
  { path: '/customersEdit/:id', as: 'CustomerEdit', component: CustomerEditComponent },
  { path: '/orders', as: 'Orders', component: OrdersComponent },
  { path: '/about', as: 'About', component: AboutComponent },
  { path: '/login', as: 'Login', component: LoginComponent }
])
export class AppComponent {
  
  constructor() {

  }
  
}
