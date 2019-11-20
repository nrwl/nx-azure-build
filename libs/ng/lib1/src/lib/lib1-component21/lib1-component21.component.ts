
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib1-component21',
          templateUrl: './lib1-component21.component.html',
          styleUrls: ['./lib1-component21.component.css']
        })
        export class Lib1Component21Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        