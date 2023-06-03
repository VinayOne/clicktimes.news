import { Component } from '@angular/core';
import { HomeService } from '../../shared/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sentMsg = '';

  contactForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private homeService: HomeService) {}

  sendContactData() {
    const data = {
      'name' : this.contactForm.value.name,
      'email': this.contactForm.value.email,
      'message': this.contactForm.value.message
    }

    this.homeService.sendMail(data).subscribe({
      next: response => {
        console.log(response);
        this.contactForm.reset();
        this.sentMsg = 'Message Sent Successfuly!';
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
  }

}
