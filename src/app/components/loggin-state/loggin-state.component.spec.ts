import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginStateComponent } from './loggin-state.component';

describe('LogginStateComponent', () => {
  let component: LogginStateComponent;
  let fixture: ComponentFixture<LogginStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogginStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
