import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  loading = false;
  Form: FormGroup;
  public message_required = "Campo obrigatório";
  public email_invalid = "Email Invalido";
  public message_minLength = "digite no minimo 3 caracteres";
  public message_maxlength = "maximo de 30 caracteres";
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

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.FormConsultor();

  }

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

}
