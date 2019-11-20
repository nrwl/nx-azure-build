
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib12-component12',
          templateUrl: './lib12-component12.component.html',
          styleUrls: ['./lib12-component12.component.css']
        })
        export class Lib12Component12Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        