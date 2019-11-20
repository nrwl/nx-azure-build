
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib3-component10',
          templateUrl: './lib3-component10.component.html',
          styleUrls: ['./lib3-component10.component.css']
        })
        export class Lib3Component10Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        