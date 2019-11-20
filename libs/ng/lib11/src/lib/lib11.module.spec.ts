import { async, TestBed } from '@angular/core/testing';
import { Lib11Module } from './lib11.module';

describe('Lib11Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib11Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib11Module).toBeDefined();
  });
});
