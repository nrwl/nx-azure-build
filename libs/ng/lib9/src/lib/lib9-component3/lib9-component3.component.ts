
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib9-component3',
          templateUrl: './lib9-component3.component.html',
          styleUrls: ['./lib9-component3.component.css']
        })
        export class Lib9Component3Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        