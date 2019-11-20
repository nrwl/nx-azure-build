
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib11-component3',
          templateUrl: './lib11-component3.component.html',
          styleUrls: ['./lib11-component3.component.css']
        })
        export class Lib11Component3Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        