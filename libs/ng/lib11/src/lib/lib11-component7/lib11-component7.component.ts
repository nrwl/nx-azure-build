
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib11-component7',
          templateUrl: './lib11-component7.component.html',
          styleUrls: ['./lib11-component7.component.css']
        })
        export class Lib11Component7Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        