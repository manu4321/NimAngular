import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickRowComponent } from './stick-row.component';

describe('StickRowComponent', () => {
  let component: StickRowComponent;
  let fixture: ComponentFixture<StickRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
