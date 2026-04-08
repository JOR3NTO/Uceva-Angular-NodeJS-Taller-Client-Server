import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasPage } from './empresas.page';

describe('EmpresasPage', () => {
  let component: EmpresasPage;
  let fixture: ComponentFixture<EmpresasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
