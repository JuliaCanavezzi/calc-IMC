import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  imcFormGroup: FormGroup;
  resultado: number = 0;
  analiseImc: String = '';

  constructor(private formBuilder: FormBuilder ){
    this.imcFormGroup = formBuilder.group({
      peso: [''],
      altura: [''],
    });
  }

  calc(){
    const peso = this.imcFormGroup.controls['peso'].value;
    const altura = this.imcFormGroup.controls['altura'].value;
   const imc = peso / (altura * altura);
   this.resultado = Number(Number(imc).toFixed(2));

   this.analisaIMC()
  }

 analisaIMC(){
  if(this.resultado <= 18.5 ){
    this.analiseImc = 'baixo peso'
  } else if(this.resultado > 18.5 && this.resultado <= 24.9 ){
    this.analiseImc = 'peso saudável'
  } else if(this.resultado > 25 && this.resultado <= 29.9 ){
    this.analiseImc = 'sobrepeso'
  } else {
    this.analiseImc = 'obesidade'
  }
 }
}
