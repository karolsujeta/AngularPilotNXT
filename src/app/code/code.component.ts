import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  @Input()
  todos;
  
  constructor() { }

  ngOnInit() {
  }

}
