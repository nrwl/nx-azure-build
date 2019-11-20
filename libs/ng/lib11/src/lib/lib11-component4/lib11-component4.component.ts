
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib11-component4',
          templateUrl: './lib11-component4.component.html',
          styleUrls: ['./lib11-component4.component.css']
        })
        export class Lib11Component4Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        