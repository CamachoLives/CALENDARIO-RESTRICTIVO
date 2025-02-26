import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('authGuard', () => {
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should allow access if authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    expect(authGuard()).toBeTrue();
  });

  it('should deny access and redirect if not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);

    expect(authGuard()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
