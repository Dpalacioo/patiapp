import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corte } from 'src/app/shared/interfaces/menu-item.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CortesService {
  private api = 'http://localhost:3000/api/cortes';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getCortes(): Observable<Corte[]> {
    const token = localStorage.getItem('token'); // o usar this.auth.getToken() si lo implementas
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Corte[]>(this.api, { headers });
  }

  getCortesById(id: number): Observable<Corte> {
    const token = localStorage.getItem('token'); // o this.auth.getToken()
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<Corte>(`${this.api}/${id}`, { headers });
  }

  createCorte(corte: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post(`${this.api}`, corte, { headers });
  }
}
