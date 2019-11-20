
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib3-component12',
          templateUrl: './lib3-component12.component.html',
          styleUrls: ['./lib3-component12.component.css']
        })
        export class Lib3Component12Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        