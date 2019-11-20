import { async, TestBed } from '@angular/core/testing';
import { Lib13Module } from './lib13.module';

describe('Lib13Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib13Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib13Module).toBeDefined();
  });
});
