import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendadoComponent } from './agendado.component';

describe('AgendadoComponent', () => {
  let component: AgendadoComponent;
  let fixture: ComponentFixture<AgendadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
