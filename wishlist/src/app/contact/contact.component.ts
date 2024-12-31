import { Component } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; //samnyen module ekk hduwoth eha automa commonmoduleeka import wela thiynwa 
import { FormGroup , FormControl , Validators  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com' , 'yahoo.com']);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  constructor(){}

  ngOnInit():void{
  }

  contactForm = new FormGroup({  //me form fgroup class eka objcet ekk balaporttu wenwa object ekak denna 

    senderName: new FormControl('indura', Validators.required),  //methna me form control ekk kiynne attama form eke ekama eka input feild ekak control kirimat awshya wana deyak , form group kiynne ewage formcontroller s ekt group krla thiygena inna container ekak wage deyk
    senderEmail: new FormControl('' , [Validators.required , Validators.email , invalidEmailDomain]), //me wage validations godak denwa eka arry ekkt denwa nm e valdation set eka arry ekt danna one , ekak nm array ekk nathuwa nikan thibbahaki awlk nha eth godak thiynmwa nm arry ekk daanna one , ekak thiyeddi onnm e ekat thibbahaki array ekk athule eth hari
    senderMessage: new FormControl('' , [Validators.required , Validators.minLength(10)])  //mewaye me validators.required kiynne ewa onemai kiyna eka , mewa validation methods, mewa true unoth thami contactForm.valid method eka true wenna submit form eke deela thiynawa  e mthod eka   
  })//min length ekn krnne characters 10 k thama minimun thiyenne puluwan kiyna eka 


  // senderNameController = new FormControl('');
  // senderEmailController = new FormControl('');
  // senderMessageController = new FormControl('');

  // submitform(){
  //   if(this.senderNameController.dirty){
  //     alert("you changed the name feild");
  //   }
  // }

  submitForm(){
    console.log(this.contactForm.value)
    console.log("validation status " + this.contactForm.valid) //emekn krnne entire form eke validity eka check rkna eka , api validity eka check krna widiya habai dela thiynna one 
  } 

}
