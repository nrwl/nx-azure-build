
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib1-component4',
          templateUrl: './lib1-component4.component.html',
          styleUrls: ['./lib1-component4.component.css']
        })
        export class Lib1Component4Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        