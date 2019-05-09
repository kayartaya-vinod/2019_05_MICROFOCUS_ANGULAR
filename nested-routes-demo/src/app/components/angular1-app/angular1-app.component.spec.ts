import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular1AppComponent } from './angular1-app.component';

describe('Angular1AppComponent', () => {
  let component: Angular1AppComponent;
  let fixture: ComponentFixture<Angular1AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular1AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular1AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
