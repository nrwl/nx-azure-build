import { async, TestBed } from '@angular/core/testing';
import { Lib3Module } from './lib3.module';

describe('Lib3Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib3Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib3Module).toBeDefined();
  });
});
