import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  email: string = "example@rv.com";
  message: string = "I am a ReVeluv";
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  send(): void{

  }

}
