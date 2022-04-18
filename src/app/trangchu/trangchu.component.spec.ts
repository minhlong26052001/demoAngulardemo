import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuComponent } from './trangchu.component';

describe('TrangchuComponent', () => {
  let component: TrangchuComponent;
  let fixture: ComponentFixture<TrangchuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangchuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
