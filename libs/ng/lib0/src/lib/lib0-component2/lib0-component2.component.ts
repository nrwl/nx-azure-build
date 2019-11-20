
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib0-component2',
          templateUrl: './lib0-component2.component.html',
          styleUrls: ['./lib0-component2.component.css']
        })
        export class Lib0Component2Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        