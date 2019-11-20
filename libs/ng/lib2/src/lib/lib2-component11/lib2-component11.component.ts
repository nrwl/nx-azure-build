
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib2-component11',
          templateUrl: './lib2-component11.component.html',
          styleUrls: ['./lib2-component11.component.css']
        })
        export class Lib2Component11Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        