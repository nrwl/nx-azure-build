
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib14-component3',
          templateUrl: './lib14-component3.component.html',
          styleUrls: ['./lib14-component3.component.css']
        })
        export class Lib14Component3Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        