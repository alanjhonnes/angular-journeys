import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyAComponent } from './journey-a.component';

describe('JourneyAComponent', () => {
  let component: JourneyAComponent;
  let fixture: ComponentFixture<JourneyAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
