import { async, TestBed } from '@angular/core/testing';
import { Lib0Module } from './lib0.module';

describe('Lib0Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib0Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib0Module).toBeDefined();
  });
});
