import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MenuItemComponent } from "./restaurants-details/menu-item/menu-item.component";
import { MenuComponent } from "./restaurants-details/menu/menu.component";
import { RestaurantsDetailsComponent } from "./restaurants-details/restaurants-details.component";
import { ReviewsComponent } from "./restaurants-details/reviews/reviews.component";
import { ShoppingCartComponent } from "./restaurants-details/shopping-cart/shopping-cart.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [

  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "restaurants",
    component: RestaurantsComponent,
  },
  {
    path: "restaurants/:id",
    component: RestaurantsDetailsComponent,
    children: [
      {
        path: "",
        redirectTo: 'menu', pathMatch: 'full',
      },
      {
        path: "menu",
        component: MenuComponent,
      },
      {
        path: "reviews",
        component: ReviewsComponent,
      },

    ]
  },
  {
    path: "menu",
    component: MenuComponent,
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent,
  },
  {
    path: "menu-item",
    component: MenuItemComponent,
  },


]


