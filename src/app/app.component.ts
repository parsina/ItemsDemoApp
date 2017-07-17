import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import {ItemComponent} from "./components/item/item.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ItemComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
