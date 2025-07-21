import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private allAnswers: any[] = [];

  addAnswer(answer: any) {
    this.allAnswers.push(answer);
  }

  getAnswers() {
    return this.allAnswers;
  }

  getAnswerByIndex(index: number) {
    return this.allAnswers[index];
  }

  clearAnswers() {
    this.allAnswers = [];
  }

  constructor() { }
}
