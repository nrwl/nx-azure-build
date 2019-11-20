
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib1-component23',
          templateUrl: './lib1-component23.component.html',
          styleUrls: ['./lib1-component23.component.css']
        })
        export class Lib1Component23Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        