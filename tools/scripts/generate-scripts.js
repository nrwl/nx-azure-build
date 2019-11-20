const cp = require('child_process');
const fs = require('fs');

const NUMBER_OF_LIBS = 15;
const NUMBER_OF_COMPONENTS = 30;

function generateAngularLibs() {
  const libNames = [];

  for (let i = 0; i < NUMBER_OF_LIBS; ++i) {
    libNames.push(`lib${i}`);
  }

  libNames.forEach(libName => generateAngularLib(libName));

  const selectors = libNames
    .map(c => `<happyorg-${c}-main></happyorg-${c}-main>`)
    .join('\n');
  fs.writeFileSync(
    `apps/ng-app/src/app/app.component.html`,
    `
    <div>
      ${selectors}
    </div>
  `
  );

  const imports = libNames
    .map(
      libName =>
        `import { ${moduleName(libName)} } from '@happyorg/ng/${libName}';`
    )
    .join('\n');

  const moduleImports = libNames
    .map(childLibName => moduleName(childLibName))
    .join(', ');

  fs.writeFileSync(
    `apps/ng-app/src/app/app.module.ts`,
    `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

${imports}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ${moduleImports}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
`
  );

  function generateAngularLib(libName) {
    cp.execSync(
      `nx g @nrwl/angular:lib ${libName} --directory=ng --simpleModuleName`
    );

    const componentNames = [];

    for (let i = 0; i < NUMBER_OF_COMPONENTS; ++i) {
      componentNames.push(`${libName}-component${i}`);
    }

    componentNames.forEach(componentName => {
      cp.execSync(
        `nx g @nrwl/angular:component ${componentName}  --project=ng-${libName}`
      );

      const componentClass = componentClassName(componentName);
      fs.writeFileSync(
        `libs/ng/${libName}/src/lib/${componentName}/${componentName}.component.spec.ts`,
        `
      import { async, ComponentFixture, TestBed } from '@angular/core/testing';

      import { ${componentClass} } from './${componentName}.component';
      
      describe('${componentClass}', () => {
        let component: ${componentClass};
        let fixture: ComponentFixture<${componentClass}>;
      
        beforeEach(async(() => {
          TestBed.configureTestingModule({
            declarations: [ ${componentClass} ]
          })
          .compileComponents();
        }));
      
        beforeEach(() => {
          fixture = TestBed.createComponent(${componentClass});
          component = fixture.componentInstance;
          fixture.detectChanges();
        });
    
        ${emptySpecs()}
      });    
    `
      );

      fs.writeFileSync(
        `libs/ng/${libName}/src/lib/${componentName}/${componentName}.component.html`,
        `
          <p>{{sharedConst}}</p>
        `
      );

      fs.writeFileSync(
        `libs/ng/${libName}/src/lib/${componentName}/${componentName}.component.ts`,
        `
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-${componentName}',
          templateUrl: './${componentName}.component.html',
          styleUrls: ['./${componentName}.component.css']
        })
        export class ${componentClass} implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        `
      );
    });

    cp.execSync(
      `nx g @nrwl/angular:component ${libName}-main  --project=ng-${libName} --export`
    );

    const selectors = componentNames
      .map(c => `<happyorg-${c}></happyorg-${c}>`)
      .join('\n');

    fs.writeFileSync(
      `libs/ng/${libName}/src/lib/${libName}-main/${libName}-main.component.html`,
      `
    <div>
      ${selectors}
    </div>
  `
    );

    fs.writeFileSync(
      `libs/ng/${libName}/src/lib/${libName}-main/${libName}-main.component.spec.ts`,
      `
    describe('empty', () => {
      it('empty', () => {
        expect(1).toEqual(1);
      })
    });
  `
    );
  }

  function emptySpecs() {
    let res = [];
    for (let i = 0; i < 100; ++i) {
      res.push(`
      it('should create', () => {
        expect(component).toBeTruthy();
      });
      `);
    }
    return res.join('\n');
  }

  function moduleName(libName) {
    return libName.charAt(0).toUpperCase() + libName.slice(1) + 'Module';
  }

  function componentClassName(name) {
    const [libName, componentName] = name.split('-');
    const l = libName.charAt(0).toUpperCase() + libName.slice(1);
    const c = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    return `${l}${c}Component`;
  }
}

function generateReactLibs() {
  const libNames = [];

  for (let i = 0; i < NUMBER_OF_LIBS; ++i) {
    libNames.push(`lib${i}`);
  }

  libNames.forEach(libName => generateReactLib(libName));

  const imports = libNames
    .map(l => `import { React${capitalize(l)} } from "@happyorg/react/${l}";`)
    .join('\n');
  const instantiations = libNames
    .map(l => `<React${capitalize(l)}></React${capitalize(l)}>`)
    .join('\n');

  fs.writeFileSync(
    `apps/react-app/src/app/app.tsx`,
    `import React from 'react';
${imports}

export const App = () => {
  return <div>
    ${instantiations}
  </div>
}

export default App;`
  );

  function generateReactLib(libName) {
    cp.execSync(`nx g @nrwl/react:lib ${libName} --directory=react`);

    const componentNames = [];

    for (let i = 0; i < NUMBER_OF_COMPONENTS; ++i) {
      componentNames.push(`${libName}-component${i}`);
    }

    componentNames.forEach(componentName => {
      cp.execSync(
        `nx g @nrwl/react:component ${componentName}  --project=react-${libName}`
      );

      const componentClass = componentClassName(componentName);
      fs.writeFileSync(
        `libs/react/${libName}/src/lib/${componentName}.spec.tsx`,
        `
        import React from 'react';
        import { render } from '@testing-library/react';

        import ${componentClass} from './${componentName}';

        describe('${componentClass}', () => {
          ${emptySpecs(componentClass)}
        });
        `
      );

      fs.writeFileSync(
        `libs/react/${libName}/src/lib/${componentName}.tsx`,
        `
        import React from 'react';
        import { SHARED_CONST } from '@happyorg/shared-utils'; 

        import './${componentName}.css';
        
        export const ${componentClass} = () => {
          return (
            <div>
              <h1>Welcome to lib0-component0 component! {SHARED_CONST}</h1>
            </div>
          );
        };
        
        export default ${componentClass};
        `
      );
    });

    const l = libName.charAt(0).toUpperCase() + libName.slice(1);
    const componentImports = componentNames
      .map(c => {
        const cc = componentClassName(c);
        return `import {${cc}} from './${c}';`;
      })
      .join('\n');
    const componentInstantiations = componentNames
      .map(c => {
        const cc = componentClassName(c);
        return `<${cc}></${cc}>`;
      })
      .join('\n');
    fs.writeFileSync(
      `libs/react/${libName}/src/lib/react-${libName}.tsx`,
      `
    import React from 'react';
    ${componentImports}
    export const React${l} = () => {
      return (
        <div>
          ${componentInstantiations}
        </div>
      );
    };

    export default React${l};
    `
    );

    function emptySpecs(componentClass) {
      let res = [];
      for (let i = 0; i < 100; ++i) {
        res.push(`
        it('should render successfully', () => {
          const { baseElement } = render(<${componentClass} />);
          expect(baseElement).toBeTruthy();
        });
        `);
      }
      return res.join('\n');
    }
  }

  function componentClassName(name) {
    const [libName, componentName] = name.split('-');
    const l = libName.charAt(0).toUpperCase() + libName.slice(1);
    const c = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    return `${l}${c}`;
  }

  function capitalize(libName) {
    return libName.charAt(0).toUpperCase() + libName.slice(1);
  }
}

generateAngularLibs();
generateReactLibs();
