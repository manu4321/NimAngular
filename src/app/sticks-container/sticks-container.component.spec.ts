import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SticksContainerComponent } from './sticks-container.component';

describe('SticksContainerComponent', () => {
  let component: SticksContainerComponent;
  let fixture: ComponentFixture<SticksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SticksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SticksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
