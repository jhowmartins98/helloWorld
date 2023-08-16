import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeiasPage } from './meias.page';

describe('MeiasPage', () => {
  let component: MeiasPage;
  let fixture: ComponentFixture<MeiasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
