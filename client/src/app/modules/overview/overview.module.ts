import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';


const routes: Routes = [
  { path: '', component: OverviewComponent }
];

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OverviewModule { }
