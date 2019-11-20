
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib11-component6',
          templateUrl: './lib11-component6.component.html',
          styleUrls: ['./lib11-component6.component.css']
        })
        export class Lib11Component6Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        