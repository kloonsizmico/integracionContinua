import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespliegueContinuoRoutingModule } from './despliegue-continuo-routing.module';
import { ComponentComponent } from './component/component.component';
import { DespliegeContinuoComponent } from './component/despliege-continuo/despliege-continuo.component';


@NgModule({
  declarations: [ComponentComponent, DespliegeContinuoComponent],
  imports: [
    CommonModule,
    DespliegueContinuoRoutingModule
  ]
})
export class DespliegueContinuoModule { }
