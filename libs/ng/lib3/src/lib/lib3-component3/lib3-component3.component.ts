
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib3-component3',
          templateUrl: './lib3-component3.component.html',
          styleUrls: ['./lib3-component3.component.css']
        })
        export class Lib3Component3Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        