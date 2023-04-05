import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InesPage } from './ines.page';

describe('InesPage', () => {
  let component: InesPage;
  let fixture: ComponentFixture<InesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
