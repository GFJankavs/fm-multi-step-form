import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSidebar } from './progress-sidebar';

describe('ProgressSidebar', () => {
  let component: ProgressSidebar;
  let fixture: ComponentFixture<ProgressSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
