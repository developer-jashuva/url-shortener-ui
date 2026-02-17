import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class UrlService {

  private apiUrl = 'http://localhost:5158/api/url/shorten';

  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string) {
    return this.http.post(this.apiUrl, { originalUrl });
  }
getAllUrls() {
  return this.http.get<any[]>('http://localhost:5158/api/url/all');
}
deleteUrl(code: string) {
  return this.http.delete(`http://localhost:5158/api/url/${code}`);
}

}
