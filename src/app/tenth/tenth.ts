import { QuestService } from './../@services/quest-service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Example } from '../@services/example';

@Component({
  selector: 'app-tenth',
  imports: [RouterLink, FormsModule],
  templateUrl: './tenth.html',
  styleUrl: './tenth.scss'
})
export class Tenth {
  getQuestTeema: string = "";
  getQuestExplain: string = "";
  getStartT: string = "";
  getEndT: string = "";

  getQuestion:any[]=[]
  constructor(private questService: QuestService, private teema: Example) { }

  items: { content: string, type: string, required: boolean }[] = [];
  ngOnInit(): void {
    this.getQuestion=this.teema.question
    console.log(this.getQuestion);
  }
  ngAfterContentInit(): void {
    this.getQuestTeema = this.questService.newQuestTeema
    this.getQuestExplain = this.questService.newQuestExplain
    this.getStartT = this.questService.newStartT
    this.getEndT = this.questService.newEndT
  }
}
