import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashViewComponent } from './view/dash-view/dash-view.component';

const ROUTES: Routes = [
  { path:'', component: DashboardComponent, children:[
    { path: '', component: DashViewComponent }
  ]}
]

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    DashViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DashboardModule { }
