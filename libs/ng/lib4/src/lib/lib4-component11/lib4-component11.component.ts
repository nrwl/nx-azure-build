
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib4-component11',
          templateUrl: './lib4-component11.component.html',
          styleUrls: ['./lib4-component11.component.css']
        })
        export class Lib4Component11Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        