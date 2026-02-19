import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class UrlService {

  private apiUrl = 'https://secureurlshortenerr.onrender.com/api/url/shorten';

  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string) {
    return this.http.post(this.apiUrl, { originalUrl });
  }
getAllUrls() {
  return this.http.get<any[]>('https://secureurlshortenerr.onrender.com/api/url/all');
}
deleteUrl(code: string) {
  return this.http.delete(`https://secureurlshortenerr.onrender.com/api/url/${code}`);
}

}
