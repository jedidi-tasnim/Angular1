import { Component, OnInit } from '@angular/core';
import { carte } from '../core/model/carte';
import { user } from '../core/model/user';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {

  user !: user;
  carte !: carte;

  constructor() { }

  ngOnInit(): void {
    this.user = new user;
    this.carte = new carte;
  }

}
