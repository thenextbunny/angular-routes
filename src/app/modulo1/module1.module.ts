import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [Child1Component, Child2Component],
})
export class Modulo1Module {}
