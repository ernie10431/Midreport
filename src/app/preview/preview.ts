import { AnswerService } from './../@services/answer-service';
import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { UserSrevice } from '../@services/user-srevice';
import { QuestService } from '../@services/quest-service';

@Component({
  selector: 'app-preview',
  imports: [RouterLink,],
  templateUrl: './preview.html',
  styleUrl: './preview.scss'
})
export class Preview {

questData!: any;
  isAdmin = false;

  constructor(
    private questService: QuestService,
    private router: Router,
    private userService: UserSrevice,
    private answerService: AnswerService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin;
    this.questData = this.questService.questData;
  }

  adminGoBack() {
    this.router.navigate(['/tabs-admin/feedbook']);
  }

  goBack() {
    this.router.navigate(['/questionnaire']);
  }

  goList() {
    this.answerService.addAnswer(this.questData);

    // 儲存成功後記得將Service中的資料清空避免資料錯誤
    this.questService.questData = null;
    this.router.navigate(['/forth']);
  }

}
