import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-test1',
  templateUrl: 'test1.component.html',
  styleUrls: ['test1.component.css'],
  inputs: ['name']
})
export class Test1Component implements OnInit {
 
  name: string;

  constructor() {
   }

  ngOnInit() {
  }

}
