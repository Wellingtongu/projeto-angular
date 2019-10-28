import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoColoridoDirective } from '../campo-colorido.directive';
import { CadastroComponent } from './cadastro.component';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    CampoColoridoDirective,
    CadastroComponent
  ],
  imports: [
    CommonModule
    
  ],
  entryComponents: [
    ModalComponent
  ]

})
export class CadastroModule { }
