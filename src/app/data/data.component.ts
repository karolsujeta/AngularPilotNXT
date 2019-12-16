import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  pilotForm: FormGroup = null;

  newforward: String = '';
  newpower: String = '';

  @Output()
  event = new EventEmitter<any>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.pilotForm = this.fb.group({
      forward: [''],
      power: ['']
    });
  }

  addTodo() {
    var newElement = {
      forward: this.newforward,
      power: this.newpower
    }
    this.event.emit(newElement);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pilotForm.value);
  }





}
