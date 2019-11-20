
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib10-component10',
          templateUrl: './lib10-component10.component.html',
          styleUrls: ['./lib10-component10.component.css']
        })
        export class Lib10Component10Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        