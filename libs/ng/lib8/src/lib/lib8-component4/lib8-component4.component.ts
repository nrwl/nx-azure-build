
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib8-component4',
          templateUrl: './lib8-component4.component.html',
          styleUrls: ['./lib8-component4.component.css']
        })
        export class Lib8Component4Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        