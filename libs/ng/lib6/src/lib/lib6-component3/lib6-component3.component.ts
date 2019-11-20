
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib6-component3',
          templateUrl: './lib6-component3.component.html',
          styleUrls: ['./lib6-component3.component.css']
        })
        export class Lib6Component3Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        