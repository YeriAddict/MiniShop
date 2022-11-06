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
    const text = "Thank you for your feedback. We hope to see you shop again in our store!"  + '\n' 
    + "This message : " + "'" + this.message + "'" + " has been sent by " + "'" + this.email + "'."
    alert(text);
  }

}
