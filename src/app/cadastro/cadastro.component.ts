import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { maiorQue10 } from '../validators/maior-que-10';
import { cpfCnpjValidator } from '../validators/validacpf';
// import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material';
import { NewModalComponent } from '../new-modal/new-modal.component';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  prazos = [];
  tipo: string;
  nome = "wellington";


  tipos = [
    { value: 'imovel', viewValue: 'Imóvel' },
    { value: 'residencial', viewValue: 'Residencial' },
    { value: 'comercial', viewValue: 'Comercial' }
  ];

  loading = false;
  Form: FormGroup;
  public message_required = "Campo obrigatório";
  public email_invalid = "Email Invalido";
  public message_minLength = "digite no minimo 3 caracteres";
  public message_maxlength = "maximo de 30 caracteres";
  public message_cpfCnpjValidator = "CPF ou CNPJ Invalido";
  errors: any = [];
  fone = '';
  cnpj_cpf = '';
  DECIMAL_SEPARATOR = ".";
  GROUP_SEPARATOR = ",";
  pureResult: any;
  maskedId: any;
  val: any;
    v: any;
    maxlength_cnpj = 14;

  // modal example
  dialogRef: any;




  variavelteste = "wellington lindão";

  constructor(private fb: FormBuilder,
    // modal example
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.FormConsultor();

  }

  // modal example


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { name: "well", animal: "teste" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed => ' + result);
    });
  }


  openDialognewmodal(): void {
    const dialogRef = this.dialog.open(NewModalComponent, {
      width: '250px',
      // data: { name: "well", animal: "teste" }
      data: this.variavelteste
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed => ' + result);
    });
  }


  // modal example

  FormConsultor() {
    // demo message to show
    this.Form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320)
      ])
      ],
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])
      ],
      cidade: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
      ],
      fone: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
      ],
      cnpj_cpf: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        // Validators.maxLength(14)
        cpfCnpjValidator,
        maiorQue10
      ])
      ],

      tipo: ['', Validators.compose([
        Validators.required,
      ])
      ],
      valor: ['', Validators.compose([
        Validators.required,
      ])
      ],
      valor_financiamento: ['', Validators.compose([
        Validators.required,
      ])
      ],
      prazo: ['', Validators.compose([
        Validators.required,
      ])
      ],
    });
  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.Form.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  onSubmit(data) {
    console.log(`dados=>  ${data}`);

  }

  Tiposelected($event) {
    this.prazos = [];

    if ($event === "imovel") {
      for (let index = 1; index <= 30; index++) {
        this.prazos.push(
          { value: index, viewValue: index + " Ano (s)" }
        )
      }
    }
    else if ($event === "residencial" || $event === "comercial") {
      for (let index = 1; index <= 10; index++) {
        this.prazos.push(
          { value: index, viewValue: index + " Ano (s)" }
        )
      }
    }
  }






















}
