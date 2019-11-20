
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib1-component8',
          templateUrl: './lib1-component8.component.html',
          styleUrls: ['./lib1-component8.component.css']
        })
        export class Lib1Component8Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        