import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChuteirasPage } from './chuteiras.page';

describe('ChuteirasPage', () => {
  let component: ChuteirasPage;
  let fixture: ComponentFixture<ChuteirasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChuteirasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
