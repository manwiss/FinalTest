import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {FORM_DIRECTIVES} from '@angular/common';

import {MdToolbar}                        from '@angular2-material/toolbar';
import {MdButton}                         from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES, MdSidenav} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES}               from '@angular2-material/list';
import {MD_CARD_DIRECTIVES}               from '@angular2-material/card';
import {MdInput}                          from '@angular2-material/input';
import {MdCheckbox}                       from '@angular2-material/checkbox';
import {MdIcon, MdIconRegistry}           from '@angular2-material/icon';
import {MD_PROGRESS_BAR_DIRECTIVES}       from '@angular2-material/progress-bar';
import {MD_PROGRESS_CIRCLE_DIRECTIVES}    from '@angular2-material/progress-circle';

@Component({
  moduleId: module.id,
  selector: 'test-material',
  templateUrl: 'test-material.component.html',
  styleUrls: ['test-material.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    FORM_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_PROGRESS_BAR_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdIcon],
    providers: [MdIconRegistry]
})
export class TestMaterialComponent implements OnInit {
  folders = [
    { name: "Photos", updated: "Jan 1, 2016"},
    { name: "Recipes", updated: "Jan 17, 2016"},
    { name: "Work", updated: "Jan 28, 2016"}];

  notes = [
    { name: "Vacation Itinerary", updated: "Feb 20, 2016"},
    { name: "Kitchen Remodel", updated: "Jan 18, 2016"}];

  constructor() {}

  ngOnInit() {
  }

}
