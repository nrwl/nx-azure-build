
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib2-component6',
          templateUrl: './lib2-component6.component.html',
          styleUrls: ['./lib2-component6.component.css']
        })
        export class Lib2Component6Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        