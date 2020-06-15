import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntregaContinuaRoutingModule } from './entrega-continua-routing.module';
import { ComponentComponent } from './component/component.component';


@NgModule({
  declarations: [ComponentComponent],
  imports: [
    CommonModule,
    EntregaContinuaRoutingModule
  ]
})
export class EntregaContinuaModule { }
