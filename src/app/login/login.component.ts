import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  languageControl = new FormControl('PTB')
  atuacaoGroup: FormGroup = new FormGroup({
    atuacao: new FormControl('', Validators.required)
  })
  contatoGroup: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    telefone: new FormControl('', Validators.required),
    linkedin: new FormControl('', Validators.required),
    portifolio: new FormControl('',Validators.required)
  })
  disponibilidadeGroup: FormGroup = new FormGroup({
    disponibilidade: new FormControl('', Validators.required),
    horario: new FormControl('', Validators.required),
    salarioHr: new FormControl('',Validators.required)
  })
  disponibilidadeAdmGroup: FormGroup = new FormGroup({
    disponibilidade: new FormControl('', Validators.required),
    horario: new FormControl('', Validators.required),
    portugues: new FormControl(false),
    ingles: new FormControl(false),
    espanhol: new FormControl(false),
    outros: new FormControl(false),
    outraLingua: new FormControl()
  })
  dadosPessoaisGroup: FormGroup = new FormGroup({
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    sexo:new FormControl('',Validators.required),
    formacao: new FormControl ('',Validators.required),
    estadoCivil: new FormControl ('', Validators.required)
    
  })
  

  firstFormGroup: FormGroup = new FormGroup({
    firstCtrl: new FormControl('', Validators.required)
  })
  secondFormGroup: FormGroup = new FormGroup({
    secondCtrl: new FormControl('', Validators.email)
  })

  constructor() { }

  ngOnInit(): void {
  }

  teste(){
    console.log(this.disponibilidadeAdmGroup)
  }
}


