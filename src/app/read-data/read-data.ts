
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../@services/answer-service';

@Component({
  selector: 'app-read-data',
  imports: [],
  templateUrl: './read-data.html',
  styleUrl: './read-data.scss'
})
export class ReadData implements OnInit{
  data: any;
  index: number = -1;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private router:Router
  ) {}

  ngOnInit() {
    // 從網址取得 index（從第七頁點過來）
    this.index = Number(this.route.snapshot.paramMap.get('index'));

    // 根據 index 取資料
    this.data = this.answerService.getAnswerByIndex(this.index);
  }
  returnList(){
    this.router.navigate(["./seventh"])
  }

}
