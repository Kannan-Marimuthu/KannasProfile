import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model = new Contact(1, 'Dr IQ', 'test@g.com', 'Chuck Overstreet');
  submitted = false;

  onSubmit() { this.submitted = true; 
  }

  constructor() { }

  ngOnInit() {
  }

  
  get diagnostic() { return JSON.stringify(this.model); }

}
