import { async, TestBed } from '@angular/core/testing';
import { Lib1Module } from './lib1.module';

describe('Lib1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib1Module).toBeDefined();
  });
});
