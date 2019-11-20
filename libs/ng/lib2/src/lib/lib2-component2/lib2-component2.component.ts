
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib2-component2',
          templateUrl: './lib2-component2.component.html',
          styleUrls: ['./lib2-component2.component.css']
        })
        export class Lib2Component2Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        