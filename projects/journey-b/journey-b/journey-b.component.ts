import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-journey-b',
  // templateUrl: './journey-b.component.html',
  template: `
  <p>journey-b works!</p>
<!-- <a routerLink="route-b">Go to route-b</a>
<router-outlet></router-outlet> -->

<button (click)="emitEvent()">
  Click me
</button>

<pre>
  {{texto | json }}
</pre>

<pre>
  {{textos | json }}
</pre>
  `,
  // styleUrls: ['./journey-b.component.scss']
})
export class JourneyBComponent implements OnInit, OnDestroy {

  @Input()
  stateService: any;

  @Input()
  texto: any;

  @Input()
  textos: any;

  @Output()
  messageEmitted = new EventEmitter();

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {

    console.log('loggin $state from above: ', this.stateService);

    console.log('on init');
    this.router.initialNavigation();
    this.router.navigate(['/']);
    console.log(this.router);
  }

  ngOnDestroy() {
    console.log('on destroy b');
    this.router.navigate(['/'], {
      skipLocationChange: true,
    });
    this.router.dispose();
  }

  emitEvent() {
    this.messageEmitted.emit({
      message: 'some message',
    });
  }

}
