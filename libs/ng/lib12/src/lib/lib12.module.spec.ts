import { async, TestBed } from '@angular/core/testing';
import { Lib12Module } from './lib12.module';

describe('Lib12Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib12Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib12Module).toBeDefined();
  });
});
