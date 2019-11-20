
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib1-component16',
          templateUrl: './lib1-component16.component.html',
          styleUrls: ['./lib1-component16.component.css']
        })
        export class Lib1Component16Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        