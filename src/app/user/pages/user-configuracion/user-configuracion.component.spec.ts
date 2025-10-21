import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfiguracionComponent } from './user-configuracion.component';

describe('UserConfiguracionComponent', () => {
  let component: UserConfiguracionComponent;
  let fixture: ComponentFixture<UserConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserConfiguracionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
