import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGoBackLinkComponent } from './my-go-back-link.component';

describe('MyLinkComponent', () => {
  let component: MyGoBackLinkComponent;
  let fixture: ComponentFixture<MyGoBackLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGoBackLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGoBackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
