
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritePage } from './detail/favorite.page';
import { FavoritesPage } from './list/favorites.page';



const routes: Routes = [
  {
    path: '',
    component: FavoritesPage
  },
  {
    path: 'detail/:id',
    component: FavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPageRoutingModule {}
