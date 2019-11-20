import { async, TestBed } from '@angular/core/testing';
import { Lib5Module } from './lib5.module';

describe('Lib5Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib5Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib5Module).toBeDefined();
  });
});
