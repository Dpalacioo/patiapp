import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = 'http://localhost:3000/api/auth';

  // NUEVO: BehaviorSubject para el usuario
  private userSubject = new BehaviorSubject<any>(this.getUser());
  public user$: Observable<any> = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http
      .post<{ token: string; user: any }>(`${this.api}/login`, data)
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));

          // actualizar BehaviorSubject
          this.userSubject.next(res.user);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // limpiar BehaviorSubject
    this.userSubject.next(null);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  getUser() {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  }

  getRole(): string {
    const user = this.getUser();
    return user?.role ?? '';
  }
}
