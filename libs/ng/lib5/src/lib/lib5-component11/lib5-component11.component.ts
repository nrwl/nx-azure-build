
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib5-component11',
          templateUrl: './lib5-component11.component.html',
          styleUrls: ['./lib5-component11.component.css']
        })
        export class Lib5Component11Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        