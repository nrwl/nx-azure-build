
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib6-component6',
          templateUrl: './lib6-component6.component.html',
          styleUrls: ['./lib6-component6.component.css']
        })
        export class Lib6Component6Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        