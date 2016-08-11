import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'child',
  templateUrl: 'test2.component.html',
  styleUrls: ['test2.component.css'],
  inputs:['name'],
  outputs: ['onClick']
})
export class Test2Component implements OnInit {

  name: string;

  onClick: EventEmitter<string>;

  constructor() {
    this.onClick = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  clicked(): void {
    console.log(`You clicked me!. I'm '${this.name}'`);

    this.onClick.emit(`You clicked me!. I'm '${this.name}'`);
  }
}
