
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib6-component4',
          templateUrl: './lib6-component4.component.html',
          styleUrls: ['./lib6-component4.component.css']
        })
        export class Lib6Component4Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        