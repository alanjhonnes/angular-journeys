import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey-a',
  templateUrl: './journey-a.component.html',
  styleUrls: ['./journey-a.component.scss']
})
export class JourneyAComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.initialNavigation();
  }

  ngOnDestroy() {
    this.router.dispose();
  }

}
