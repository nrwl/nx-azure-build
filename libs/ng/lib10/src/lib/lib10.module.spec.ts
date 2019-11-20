import { async, TestBed } from '@angular/core/testing';
import { Lib10Module } from './lib10.module';

describe('Lib10Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib10Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib10Module).toBeDefined();
  });
});
