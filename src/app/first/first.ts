import { QuestService } from './../@services/quest-service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { DiologPage } from '../diolog-page/diolog-page';

@Component({
  selector: 'app-first',
  imports: [FormsModule, RouterLink],
  templateUrl: './first.html',
  styleUrl: './first.scss'
})
export class First {

  readonly dialog = inject(MatDialog);
  constructor(private questService: QuestService,private router:Router) { }
  newQuestTeema: string = "";
  newQuestExplain: string = "";
  newStartT: string = "";
  newEndT: string = "";

  TPData() {
if(this.newQuestTeema==""||this.newQuestExplain==""||this.newStartT==""||this.newEndT==""){
const dialogRef = this.dialog.open(DiologPage,{
  // data:{name:'name',animal:'title'},
  width: "200px",
  height:"200px",
})
}
 else{
  this.questService.newQuestTeema = this.newQuestTeema
    this.questService.newQuestExplain=this.newQuestExplain
    this.questService.newStartT=this.newStartT
    this.questService.newEndT=this.newEndT
this.router.navigate(["/second"])
}
}


  }



