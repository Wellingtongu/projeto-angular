import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent {

  @Input() inputnewtest: ElementRef;
  @Input() tipos = {};
  
  @Input() showedit: ElementRef;
  @Input() nome: ElementRef;
  


}
