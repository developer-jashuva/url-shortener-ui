import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlService } from './services/url.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

copyUrl() {
  navigator.clipboard.writeText(this.shortUrl);
  alert("Copied to clipboard!");
}

  history: any[] = [];

  urlInput = '';
  shortUrl = '';
  errorMessage = '';

  constructor(private urlService: UrlService) {}
  loadHistory() {
  this.urlService.getAllUrls().subscribe({
    next: (res) => this.history = res
  });
}

delete(item: any) {

  if (!confirm("Delete this URL?"))
    return;

  const code = item.shortUrl.split('/').pop();

  this.urlService.deleteUrl(code).subscribe({
    next: () => {
      this.loadHistory();
    }
  });

}

   

  shorten() {
    this.shortUrl = '';
    this.errorMessage = '';

    this.urlService.shortenUrl(this.urlInput).subscribe({
      next: (res: any) =>{ this.shortUrl = res.shortUrl,this.loadHistory();
},
      error: (err) => this.errorMessage = err.error.message
    });
  }
}
