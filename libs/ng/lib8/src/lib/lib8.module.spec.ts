import { async, TestBed } from '@angular/core/testing';
import { Lib8Module } from './lib8.module';

describe('Lib8Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib8Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib8Module).toBeDefined();
  });
});
