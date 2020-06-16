import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPrincipalComponent } from './agenda-principal.component';

describe('AgendaPrincipalComponent', () => {
  let component: AgendaPrincipalComponent;
  let fixture: ComponentFixture<AgendaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
