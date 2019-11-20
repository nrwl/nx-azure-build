
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib7-component2',
          templateUrl: './lib7-component2.component.html',
          styleUrls: ['./lib7-component2.component.css']
        })
        export class Lib7Component2Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        