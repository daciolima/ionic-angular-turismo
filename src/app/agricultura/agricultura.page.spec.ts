import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgriculturaPage } from './agricultura.page';

describe('AgriculturaPage', () => {
  let component: AgriculturaPage;
  let fixture: ComponentFixture<AgriculturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgriculturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
