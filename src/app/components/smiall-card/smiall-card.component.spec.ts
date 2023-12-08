import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmiallCardComponent } from './smiall-card.component';

describe('SmiallCardComponent', () => {
  let component: SmiallCardComponent;
  let fixture: ComponentFixture<SmiallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmiallCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmiallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
