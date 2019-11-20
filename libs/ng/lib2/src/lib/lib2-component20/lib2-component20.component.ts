
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib2-component20',
          templateUrl: './lib2-component20.component.html',
          styleUrls: ['./lib2-component20.component.css']
        })
        export class Lib2Component20Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        