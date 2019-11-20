
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib3-component9',
          templateUrl: './lib3-component9.component.html',
          styleUrls: ['./lib3-component9.component.css']
        })
        export class Lib3Component9Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        