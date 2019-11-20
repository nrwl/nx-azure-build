
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib0-component1',
          templateUrl: './lib0-component1.component.html',
          styleUrls: ['./lib0-component1.component.css']
        })
        export class Lib0Component1Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        