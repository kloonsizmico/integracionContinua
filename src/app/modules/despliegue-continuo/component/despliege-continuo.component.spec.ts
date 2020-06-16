import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespliegeContinuoComponent } from './despliege-continuo.component';

describe('DespliegeContinuoComponent', () => {
  let component: DespliegeContinuoComponent;
  let fixture: ComponentFixture<DespliegeContinuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespliegeContinuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespliegeContinuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
