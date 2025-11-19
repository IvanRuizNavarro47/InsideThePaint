import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopShoesComponent } from './top-shoes.component';

describe('TopShoesComponent', () => {
  let component: TopShoesComponent;
  let fixture: ComponentFixture<TopShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopShoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
