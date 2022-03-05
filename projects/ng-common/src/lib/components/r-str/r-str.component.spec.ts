import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RStrComponent } from './r-str.component';

describe('RStrComponent', () => {
  let component: RStrComponent;
  let fixture: ComponentFixture<RStrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RStrComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RStrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
