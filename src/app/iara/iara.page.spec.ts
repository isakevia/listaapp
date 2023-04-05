import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IaraPage } from './iara.page';

describe('IaraPage', () => {
  let component: IaraPage;
  let fixture: ComponentFixture<IaraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
