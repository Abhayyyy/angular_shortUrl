import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLFormComponent } from './urlform.component';

describe('URLFormComponent', () => {
  let component: URLFormComponent;
  let fixture: ComponentFixture<URLFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [URLFormComponent]
    });
    fixture = TestBed.createComponent(URLFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
