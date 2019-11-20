import { async, TestBed } from '@angular/core/testing';
import { Lib14Module } from './lib14.module';

describe('Lib14Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib14Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib14Module).toBeDefined();
  });
});
