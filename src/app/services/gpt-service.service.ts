import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GptServiceService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) { }

  generateText(prompt: string): Observable<any> {
    const body = {
      model: 'gpt-3.5-turbo',
      "messages": [{"role": "user", "content": prompt}],
    };
    return this.http.post<any>(`${this.apiUrl}`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + environment.apiKey
      }
    });
  }
}
