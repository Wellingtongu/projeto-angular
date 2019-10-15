import { Directive, Input, Output } from '@angular/core';
import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() valorInput: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }


  // @HostListener('focus') onFocus() {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  // }

  @HostListener('blur') onBlur() {
    if(this.validarCpfCnpj(this.valorInput)){
      alert("Parabens CPF valido")
    }else{
      alert("CPF Invalido tente novamente")
    }
  }
  
  // @HostListener('click') onClick(e) {
  //   console.log(e)
  // }

  // @HostListener('click') onClick(){
  //   alert("click  " + this.valorInput)
  // }

  validarCpfCnpj(valorInput): boolean {
    if (this.valorInput.length <= 11) {
      let soma: number;
      let resto: number;
      soma = 0;
      if (valorInput == "00000000000") return false;

      for (let i = 1; i <= 9; i++) soma = soma + parseInt(valorInput.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if ((resto == 10) || (resto == 11)) resto = 0;
      if (resto != parseInt(valorInput.substring(9, 10))) return false;

      soma = 0;
      for (let i = 1; i <= 10; i++) soma = soma + parseInt(valorInput.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if ((resto == 10) || (resto == 11)) resto = 0;
      if (resto != parseInt(valorInput.substring(10, 11))) return false;
      return true;
    }
    if (this.valorInput.length <= 14) {
      let tamanho = valorInput.length - 2
      let numeros = valorInput.substring(0,tamanho);
      let digitos = valorInput.substring(tamanho);
      let soma = 0;
      let pos = tamanho - 7;
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
              pos = 9;
      }
      let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0))
          return false;
           
      tamanho = tamanho + 1;
      numeros = valorInput.substring(0,tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
              pos = 9;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1))
            return false;
             
      return true;
    }
    return false
  }

}
