
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib10-component7',
          templateUrl: './lib10-component7.component.html',
          styleUrls: ['./lib10-component7.component.css']
        })
        export class Lib10Component7Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        