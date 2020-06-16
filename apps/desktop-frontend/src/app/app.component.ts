import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ebrpl2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'desktop-frontend';

  d$: Observable<any> = of({});

  data$: Observable<any> = of([]);

  host = 'http://localhost:4200';

  constructor(private http: HttpClient) {
  }

  click() {
    this.d$ = this.http.get(`${this.host}/api`);
  }

  gets() {
    this.data$ = this.http.get(`${this.host}/api/visitor/gets`);
  }

  postNest() {
    this.http.post(`${this.host}/api/visitor/post`, {
      nama: 'Annas Dan',
      umur: 29,
      alamat: '',
      id: '48490dc3-319f-44d9-9f5f-051e4b876b11'
    }).subscribe();
  }

}
