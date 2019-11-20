import { async, TestBed } from '@angular/core/testing';
import { Lib4Module } from './lib4.module';

describe('Lib4Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib4Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib4Module).toBeDefined();
  });
});
