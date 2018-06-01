import { NgModule } from '@angular/core';
import { Comp1Component } from './components';

@NgModule({
  declarations: [Comp1Component],
  exports: [Comp1Component]
})
export class LibModule {}
