import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatoriosClinicaPage } from './relatorios-clinica.page';

describe('RelatoriosPage', () => {
  let component: RelatoriosClinicaPage;
  let fixture: ComponentFixture<RelatoriosClinicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RelatoriosClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
