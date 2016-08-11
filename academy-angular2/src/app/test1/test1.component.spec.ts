/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { Test1Component } from './test1.component';

describe('Component: Test1', () => {
  it('should create an instance', () => {
    let component = new Test1Component();
    expect(component).toBeTruthy();
  });
});
