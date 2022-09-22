import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInvertedComponent } from './hero-inverted.component';

describe('HeroInvertedComponent', () => {
  let component: HeroInvertedComponent;
  let fixture: ComponentFixture<HeroInvertedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInvertedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInvertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
