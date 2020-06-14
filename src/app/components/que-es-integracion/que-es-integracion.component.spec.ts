import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsIntegracionComponent } from './que-es-integracion.component';

describe('QueEsIntegracionComponent', () => {
  let component: QueEsIntegracionComponent;
  let fixture: ComponentFixture<QueEsIntegracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueEsIntegracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueEsIntegracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
