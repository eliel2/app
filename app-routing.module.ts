import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AboutComponent } from './about/about.component';
import { NewcompComponent } from './newcomp/newcomp.component';



const routes: Routes = [{ 
  path:'',
  component: BeerListComponent,
},
{ 
  path: 'about',
  component: AboutComponent,
},
{
  path: 'newcomp',
  component: NewcompComponent,
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
