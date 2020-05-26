import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyBRouteComponent } from './journey-b-route.component';

describe('JourneyBRouteComponent', () => {
  let component: JourneyBRouteComponent;
  let fixture: ComponentFixture<JourneyBRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyBRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyBRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
