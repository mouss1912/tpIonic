
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FavoritePage } from './detail/favorite.page';
import { FavoritesPage } from './list/favorites.page';
import { FavoritesPageRoutingModule } from './favorites-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule
  ],
  declarations: [FavoritePage, FavoritesPage]
})
export class FavoritesPageModule {}
