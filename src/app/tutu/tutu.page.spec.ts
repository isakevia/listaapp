import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutuPage } from './tutu.page';

describe('TutuPage', () => {
  let component: TutuPage;
  let fixture: ComponentFixture<TutuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
