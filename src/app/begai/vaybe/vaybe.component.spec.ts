import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaybeComponent } from './vaybe.component';

describe('VaybeComponent', () => {
  let component: VaybeComponent;
  let fixture: ComponentFixture<VaybeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaybeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaybeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
