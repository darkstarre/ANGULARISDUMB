import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConnectorInputComponent } from './new-connector-input.component';

describe('NewConnectorInputComponent', () => {
  let component: NewConnectorInputComponent;
  let fixture: ComponentFixture<NewConnectorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConnectorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConnectorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
