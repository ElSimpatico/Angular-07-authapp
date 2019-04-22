import { TestBed } from '@angular/core/testing';

import { AuthGuardarService } from './auth-guardar.service';

describe('AuthGuardarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardarService = TestBed.get(AuthGuardarService);
    expect(service).toBeTruthy();
  });
});
