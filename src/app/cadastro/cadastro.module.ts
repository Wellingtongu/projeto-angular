import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatSliderModule } from '@angular/material/slider';
import { CampoColoridoDirective } from '../campo-colorido.directive';

@NgModule({
  declarations: [
    CampoColoridoDirective
  ],
  imports: [
    // MatSliderModule,
    CommonModule
  ]
})
export class CadastroModule { }
