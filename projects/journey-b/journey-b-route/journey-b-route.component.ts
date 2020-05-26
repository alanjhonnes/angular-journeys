import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // templateUrl: './journey-b-route.component.html',
  template: `
  <p>journey-b-route works!</p>
<a routerLink="/">Go back</a>
`,
  // styleUrls: ['./journey-b-route.component.scss']
})
export class JourneyBRouteComponent implements OnInit {

  constructor(activatedRoute: ActivatedRoute) {
    console.log('activatedRoute: ', activatedRoute);
  }

  ngOnInit(): void {
  }

}
