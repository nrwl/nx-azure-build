
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib12-component1',
          templateUrl: './lib12-component1.component.html',
          styleUrls: ['./lib12-component1.component.css']
        })
        export class Lib12Component1Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        