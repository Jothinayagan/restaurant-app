import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.css']
})
export class ContentCardsComponent implements OnInit {
  cards: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getProducts().subscribe(result => {
      this.cards = result;
      console.log("result ===> ", result)
    });
  }
}
