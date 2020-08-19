import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
// import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;
  successfulSendMessage = false;
  constructor( ) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl( '', Validators.required),
      'email': new FormControl( '', [Validators.required, Validators.email]),
      'message': new FormControl( '', Validators.required),
      'recaptcha': new FormControl(null, Validators.required),
    });
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}
  onSubmit(){
    if( !this.contactForm.valid){
      this.contactForm.get('name').markAsTouched();
      this.contactForm.get('email').markAsTouched();
      this.contactForm.get('message').markAsTouched();
      this.contactForm.get('recaptcha').markAllAsTouched();
      return;
    }
    this.contactForm.reset();
    this.successfulSendMessage = true;
  }
}
