/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TestMaterialComponent } from './test-material.component';

describe('Component: TestMaterial', () => {
  it('should create an instance', () => {
    let component = new TestMaterialComponent();
    expect(component).toBeTruthy();
  });
});
