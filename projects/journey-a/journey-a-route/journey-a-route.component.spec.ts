import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyARouteComponent } from './journey-a-route.component';

describe('JourneyARouteComponent', () => {
  let component: JourneyARouteComponent;
  let fixture: ComponentFixture<JourneyARouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyARouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyARouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
