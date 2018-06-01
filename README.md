# Issue repro project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Issue description

Given a library managed by the new angular-cli v6 library managment system.

Given a component `Comp1Component` of this lib imported from a barrel `index.ts` in a module `LibModule`

`projects/lib1/src/lib/components/index.ts`

```ts
export * from './comp1.component';
```

`projects/lib1/src/lib/lib.module.ts`

```ts
import { Comp1Component } from './components';
// ...

@NgModule({
  declarations: [Comp1Component],
  exports: [Comp1Component]
})
export class LibModule {}
```

When an application using this lib is launched in `prod` mode

Then build crash with the error

```log
ERROR in : Unexpected value 'undefined' exported by the module 'Lib1Module ...
```

If the component is directly imported from it's own file. It's work

`projects/lib1/src/lib/lib.module.ts`
```ts
import { Comp1Component } from './components/comp1.component';
@NgModule({
  declarations: [Comp1Component],
  exports: [Comp1Component]
})
export class LibModule {}
```

### Reproduction steps

`npm run build:lib`
`npm run start:prod`

Output from: `ng --version`.

```log
Angular CLI: 6.0.7
Node: 10.3.0
OS: linux x64
Angular: 6.0.3
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                            Version
------------------------------------------------------------
@angular-devkit/architect          0.6.7
@angular-devkit/build-angular      0.6.7
@angular-devkit/build-ng-packagr   0.6.7
@angular-devkit/build-optimizer    0.6.7
@angular-devkit/core               0.6.7
@angular-devkit/schematics         0.6.7
@angular/cli                       6.0.7
@ngtools/json-schema               1.1.0
@ngtools/webpack                   6.0.7
@schematics/angular                0.6.7
@schematics/update                 0.6.7
ng-packagr                         3.0.0
rxjs                               6.2.0
typescript                         2.7.2
webpack                            4.8.3
```