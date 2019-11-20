import { async, TestBed } from '@angular/core/testing';
import { Lib2Module } from './lib2.module';

describe('Lib2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib2Module).toBeDefined();
  });
});
