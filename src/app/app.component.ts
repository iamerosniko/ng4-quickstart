import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  template: `
    <b>Angular 2 Component using Observables!</b>
		<h3>Here is a normal H3 Tag</h3>
		<h3 class="blinker1" alBlink>And here is an example H3 tag that blinks!</h3>
      
	  <h5 style="margin-bottom: 0">VALUES</h5>
	  <div>{{ values.toString() }}</div>
	  
	  <h5 style="margin-bottom: 0">ERRORS</h5>
	  <pre><code>{{anyErrors}}</code></pre>
	  
	  <button style="margin-top: 2rem;" (click)="init()">Init</button>
  `,
})
export class AppComponent  { 

  private data: Observable<Array<number>>;
	private values: Array<number> = [];
	private anyErrors: Error;

  init() {

		this.data = new Observable(observer => 
		  {
			setTimeout(() => {
				observer.error('Hey something bad happened I guess');
			}, 2000);
			{
			  for(var i = 0; i<10; i++)
			  {
			    console.log(i);
			  }
			}
			{
			  console.log('sample');
			}
		});

		let subscription = this.data.subscribe(
			//error => this.anyErrors = error
		);

	}
}
