import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

const routes: Routes = [
  { path: '', redirectTo: 'Componente1', pathMatch: 'full' },
  { path: 'Componente1', component: Componente1Component },
  { path: 'Componente2', component: Componente2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
