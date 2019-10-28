import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CadastroComponent } from '../cadastro/cadastro.component';


export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})



export class ModalComponent {
  
  variavel = "conteudo da variaevel";
  nome = "Gustavo";
  firstname = '';


  tipos = [
    { value: '', viewValue: '' },
  ];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog

  ) {
    console.log(" abril o modal " + data.animal);

  }


  closeClick(): void {
    this.dialogRef.close();
  }

  openClick() {
    console.log("teste value " + this.firstname);
    
    this.dialogRef.close(this.variavel);
  }




}