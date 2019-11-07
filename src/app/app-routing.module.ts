import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal/modal.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NewModalComponent } from './new-modal/new-modal.component';
import { NewpageComponent } from './newpage/newpage.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', component: CadastroComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'new-modal', component: NewModalComponent },
  { path: 'new-page', component: NewpageComponent },
  { path: 'table', component: TableComponent },
  // {path: '', loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)},
  // {path: 'modal', loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [   
    RouterModule
  ]
})
export class AppRoutingModule { }
