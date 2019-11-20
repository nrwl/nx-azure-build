
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib0-component3',
          templateUrl: './lib0-component3.component.html',
          styleUrls: ['./lib0-component3.component.css']
        })
        export class Lib0Component3Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        