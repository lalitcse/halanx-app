import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalanxComponent } from './halanx.component';

describe('HalanxComponent', () => {
  let component: HalanxComponent;
  let fixture: ComponentFixture<HalanxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalanxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalanxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
