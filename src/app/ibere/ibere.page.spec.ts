import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IberePage } from './ibere.page';

describe('IberePage', () => {
  let component: IberePage;
  let fixture: ComponentFixture<IberePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IberePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
