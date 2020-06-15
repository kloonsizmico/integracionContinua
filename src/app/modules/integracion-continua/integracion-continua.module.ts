import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegracionContinuaRoutingModule } from './integracion-continua-routing.module';
import { IntegracionContinuaComponent } from './components/integracion-continua.component';
import { ComponentsComponent } from './components/components.component';
import { MenuComponent } from './components/components/menu/menu.component';


@NgModule({
  declarations: [IntegracionContinuaComponent, ComponentsComponent, MenuComponent],
  imports: [
    CommonModule,
    IntegracionContinuaRoutingModule
  ]
})
export class IntegracionContinuaModule { }
