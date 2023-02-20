import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EmploiComponent } from './emploi/emploi.component';
import { ForumComponent } from './forum/forum.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

const routes: Routes = [
  {path:'',redirectTo:'Products',pathMatch:'full'},
  {path:'Emploi',component:EmploiComponent},
  {path:'Products/:id',component:DetailProductComponent},
  {path:'Products',component:ProductsComponent},
  {path:'Formulaire',component:ForumComponent},
  {path:'TemplateDrivenFormComponent',component:TemplateDrivenFormComponentComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
