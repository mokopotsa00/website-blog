import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    console.log(this.contactForm.value);
    console.log(this.contactForm);
    this.contactForm.reset;
  }

  private initForm(){
    let name = '';
    let email = '';
    let message = ''

    this.contactForm = new FormGroup({
      'name': new FormControl( name, Validators.required),
      'email': new FormControl( email, [Validators.required, Validators.email]),
      'message': new FormControl( message, [Validators.required])
    });
  }
}
