import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracionContinuaComponent } from './integracion-continua.component';

describe('IntegracionContinuaComponent', () => {
  let component: IntegracionContinuaComponent;
  let fixture: ComponentFixture<IntegracionContinuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegracionContinuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracionContinuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
