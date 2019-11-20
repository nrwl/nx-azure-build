import { async, TestBed } from '@angular/core/testing';
import { Lib7Module } from './lib7.module';

describe('Lib7Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib7Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib7Module).toBeDefined();
  });
});
