import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if(token) { 
    return true;
  } else {
    router.navigate(['']);
    return false;
  } 
};
