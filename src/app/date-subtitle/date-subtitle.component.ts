import { Component } from '@angular/core';

@Component({
  selector: 'app-date-subtitle',
  templateUrl: './date-subtitle.component.html',
  styleUrls: ['./date-subtitle.component.scss']
})
export class DateSubtitleComponent {
  date = ""
  ngOnInit(): void {
    let today = new Date()
    this.date = this.getLiteralDay(today.getDay()) + ", " + today.getDate() + " " + this.getLiteralMonth(today.getMonth() + 1)
  }
  getLiteralMonth(numberOfMonth: number): string {
    let result = ""
    switch (numberOfMonth) {
      case 1:
        result = "Gennaio"
        break;
      case 2:
        result = "Febbraio"
        break;
      case 3:
        result = "Marzo"
        break;
      case 4:
        result = "Aprile"
        break;
      case 5:
        result = "Maggio"
        break;
      case 6:
        result = "Giugno"
        break;
      case 7:
        result = "Luglio"
        break;
      case 8:
        result = "Agosto"
        break;
      case 9:
        result = "Settembre"
        break;
      case 10:
        result = "Ottobre"
        break;
      case 11:
        result = "Novembre"
        break;
      case 12:
        result = "Dicembre"
        break;
    }
    return result
  }
  getLiteralDay(numberOfDay: number): string {
    let result = ""
    switch (numberOfDay) {
      case 1:
        result = "Lunedì"
        break;
      case 2:
        result = "Martedì"
        break;
      case 3:
        result = "Mercoledì"
        break;
      case 4:
        result = "Giovedì"
        break;
      case 5:
        result = "Venerdì"
        break;
      case 6:
        result = "Sabato"
        break;
      case 7:
        result = "Domenica"
        break;

    }
    return result
  }
}
