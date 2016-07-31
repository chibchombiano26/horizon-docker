import { Component, OnInit, Inject } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'
import * as _ from "lodash";
import * as moment from  "moment";


@Component({
    selector: 'my-app',
    template: `<div class="container-fluid">
        <p> <button type="button" (click)="click()" class="btn btn-primary">Click to insert</button> </p>
     </div>`    
})

export class AppComponent implements OnInit {

    constructor(@Inject("horizon") private horizon: any) {      
      
    }

    click(){
      let messages = this.horizon("messages");

      messages.store({
        sender: "Bob",
        time: new Date(),
        text: "Hello, World!"
      });
    }

    ngOnInit() {

     let messages = this.horizon("messages");

    /*messages.findAll({sender: "Bob"}).fetch()
              .subscribe(m => console.log(m));
    */

      messages.limit(5).watch()
     .subscribe(items => console.log(items))

    }
}