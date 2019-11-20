
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib13-component5',
          templateUrl: './lib13-component5.component.html',
          styleUrls: ['./lib13-component5.component.css']
        })
        export class Lib13Component5Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        