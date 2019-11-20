
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib10-component20',
          templateUrl: './lib10-component20.component.html',
          styleUrls: ['./lib10-component20.component.css']
        })
        export class Lib10Component20Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        