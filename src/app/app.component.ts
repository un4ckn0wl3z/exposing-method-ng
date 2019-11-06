import { Component, Input , NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  counter:number = 0;
  public constructor(private zone: NgZone) {
    
    //exposing component to the outside here
    //componentFn called from outside and it in return calls callExampleFunction()
            window['onCartCountRef'] = {
                zone: this.zone,
                componentFn: () => this.getCountCart(),
                component: this,
            };
        }
        
    public getCountCart(): any {
      this.counter+=1
        //alert(this.counter);
        return this.counter
      }

}
