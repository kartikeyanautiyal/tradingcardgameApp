import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GptServiceService } from 'src/app/services/gpt-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
    prompt = '';
    generatedText = '';
    demoprompt = 'Harley Quinn';
    popup = false;

    username:any
    token:string | null = localStorage.getItem("token");
    status: boolean = false;

    showSpinner = false;
    constructor(private gptService:GptServiceService) { }
  
    ngOnInit(): void {
      let jwt = new JwtHelperService();
      if(this.token){
        this.status = true;
        this.username = jwt.decodeToken(this.token);
      }
    }
    
    generateText() {
      this.showSpinner = true;
      this.gptService.generateText(this.demoprompt).subscribe(
        response => {
          this.showSpinner = false;
          this.generatedText = response.choices[0].message.content;
        },
        error => {
          console.log(error);
        }
      );
    }
    
    showinfo(){
      this.generateText();
      this.popup = true;
    }

    hideinfo(){
      this.popup = false;
    }
}
