import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { AsdComponent } from './components/asd/asd.component';

const routes: Routes = [{ path: '', component: LayoutsComponent, children: [{path : 'asd', component : AsdComponent , pathMatch : "full" }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
