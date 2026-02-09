import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlService } from './services/url.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {

copyUrl() {
  navigator.clipboard.writeText(this.shortUrl);
  alert("Copied to clipboard!");
}


  urlInput = '';
  shortUrl = '';
  errorMessage = '';

  constructor(private urlService: UrlService) {}

  shorten() {
    this.shortUrl = '';
    this.errorMessage = '';

    this.urlService.shortenUrl(this.urlInput).subscribe({
      next: (res: any) => this.shortUrl = res.shortUrl,
      error: (err) => this.errorMessage = err.error.message
    });
  }
}
