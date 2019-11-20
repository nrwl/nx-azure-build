
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib2-component3',
          templateUrl: './lib2-component3.component.html',
          styleUrls: ['./lib2-component3.component.css']
        })
        export class Lib2Component3Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        