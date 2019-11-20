import { async, TestBed } from '@angular/core/testing';
import { Lib9Module } from './lib9.module';

describe('Lib9Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib9Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib9Module).toBeDefined();
  });
});
