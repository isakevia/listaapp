import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsacPage } from './isac.page';

describe('IsacPage', () => {
  let component: IsacPage;
  let fixture: ComponentFixture<IsacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IsacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
