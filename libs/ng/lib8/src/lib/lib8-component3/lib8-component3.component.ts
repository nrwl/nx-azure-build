
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib8-component3',
          templateUrl: './lib8-component3.component.html',
          styleUrls: ['./lib8-component3.component.css']
        })
        export class Lib8Component3Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        