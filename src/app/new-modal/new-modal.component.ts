
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CadastroComponent } from '../cadastro/cadastro.component';



export class DialogData {
 
}


@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.scss']
})



export class NewModalComponent {
  variavel = "new modal conteudo da variaevel";

  constructor(
    public dialogRef: MatDialogRef<NewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog

  ) {
    console.log(" o funcionario da ssemana é  " + data);

  }


  closeClick(): void {
    this.dialogRef.close();
  }

  openClick(){
    this.dialogRef.close(this.variavel);
  }




}