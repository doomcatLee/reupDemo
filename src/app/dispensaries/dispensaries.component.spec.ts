import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensariesComponent } from './dispensaries.component';

describe('DispensariesComponent', () => {
  let component: DispensariesComponent;
  let fixture: ComponentFixture<DispensariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
