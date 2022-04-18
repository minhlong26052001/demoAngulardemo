import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuhuComponent } from './huhu.component';

describe('HuhuComponent', () => {
  let component: HuhuComponent;
  let fixture: ComponentFixture<HuhuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuhuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuhuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
