import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;
  successfulSendMessage = false;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl( '', Validators.required),
      'email': new FormControl( '', [Validators.required, Validators.email]),
      'message': new FormControl( '', Validators.required)
    });
  }

  onSubmit(){
    if( !this.contactForm.valid){
      this.contactForm.get('name').markAsTouched();
      this.contactForm.get('email').markAsTouched();
      this.contactForm.get('message').markAsTouched();
      return;
    }
    this.contactForm.reset();
    this.successfulSendMessage = true;
  }
}
