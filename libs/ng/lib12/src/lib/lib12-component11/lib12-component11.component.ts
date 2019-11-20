
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib12-component11',
          templateUrl: './lib12-component11.component.html',
          styleUrls: ['./lib12-component11.component.css']
        })
        export class Lib12Component11Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        