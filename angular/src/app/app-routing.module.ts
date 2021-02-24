import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContentCardsComponent } from './content-cards/content-cards.component';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'cards', component: ContentCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
