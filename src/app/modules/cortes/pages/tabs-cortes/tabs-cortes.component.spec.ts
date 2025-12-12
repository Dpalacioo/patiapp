import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCortesComponent } from './tabs-cortes.component';

describe('TabsCortesComponent', () => {
  let component: TabsCortesComponent;
  let fixture: ComponentFixture<TabsCortesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsCortesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsCortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
