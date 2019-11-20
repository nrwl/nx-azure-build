
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib2-component12',
          templateUrl: './lib2-component12.component.html',
          styleUrls: ['./lib2-component12.component.css']
        })
        export class Lib2Component12Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        