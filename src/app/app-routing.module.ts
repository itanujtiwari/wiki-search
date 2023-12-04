import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikisearchComponent } from './wikisearch/wikisearch.component';

const routes: Routes = [
  {path:'home' , component: WikisearchComponent},
  {path:'' , redirectTo:'home' , pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
