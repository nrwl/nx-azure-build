import { async, TestBed } from '@angular/core/testing';
import { Lib6Module } from './lib6.module';

describe('Lib6Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib6Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib6Module).toBeDefined();
  });
});
