
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib13-component4',
          templateUrl: './lib13-component4.component.html',
          styleUrls: ['./lib13-component4.component.css']
        })
        export class Lib13Component4Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        