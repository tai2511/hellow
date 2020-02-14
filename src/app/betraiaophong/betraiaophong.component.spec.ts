import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetraiaophongComponent } from './betraiaophong.component';

describe('BetraiaophongComponent', () => {
  let component: BetraiaophongComponent;
  let fixture: ComponentFixture<BetraiaophongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetraiaophongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetraiaophongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
