import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyBComponent } from './journey-b.component';

describe('JourneyBComponent', () => {
  let component: JourneyBComponent;
  let fixture: ComponentFixture<JourneyBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
