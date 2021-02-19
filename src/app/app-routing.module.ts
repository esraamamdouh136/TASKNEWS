import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './Components/details-page/details-page.component';
import { MainComponentComponent } from './Components/main-component/main-component.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

const routes: Routes = [
  {path : '' , component : MainComponentComponent},
  {path : 'home' , component : MainComponentComponent},
  {path : 'Details/:id' , component : DetailsPageComponent},
  {path : '**' , component : NotFoundPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
