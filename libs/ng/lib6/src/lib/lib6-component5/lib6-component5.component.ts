
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib6-component5',
          templateUrl: './lib6-component5.component.html',
          styleUrls: ['./lib6-component5.component.css']
        })
        export class Lib6Component5Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        