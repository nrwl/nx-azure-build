
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib10-component5',
          templateUrl: './lib10-component5.component.html',
          styleUrls: ['./lib10-component5.component.css']
        })
        export class Lib10Component5Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        