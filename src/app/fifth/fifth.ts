import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestService } from '../@services/quest-service';
import { UserSrevice } from '../@services/user-srevice';

@Component({
  selector: 'app-fifth',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './fifth.html',
  styleUrl: './fifth.scss'
})
export class Fifth {
  // 多選M 單選Q 文字輸入T
  quest = {
    title: '範例問卷標題',
    sDate: '2024/11/06',
    eDate: '2024/12/23',
    explain: '問卷說明問卷說明問卷說明問卷說明問卷說明問卷說明\
              問卷說明問卷說明問卷說明問卷說明問卷說明問卷說明\
              問卷說明問卷說明問卷說明問卷說明問卷說明問卷說明\
              問卷說明問卷說明問卷說明問卷說明問卷說明問卷說明',
    questArray: [
      {
        questId: 1,
        need: true,
        questName: '水果水果',
        type: 'M',
        options: [
          { optionName: '蘋果', code: 'A' },
          { optionName: '香蕉', code: 'B' },
          { optionName: '橘子', code: 'C' },
        ]
      },
      {
        questId: 2,
        need: true,
        questName: '蔬菜蔬菜',
        type: 'Q',
        options: [
          { optionName: '蘑菇', code: 'A' },
          { optionName: '高麗菜', code: 'B' },
          { optionName: '地瓜葉', code: 'C' },
        ]
      },
      {
        questId: 3,
        need: false,
        questName: '公威阿',
        type: 'T',
        options: []
      },
      {
        questId: 4,
        need: false,
        questName: '冰淇淋',
        type: 'Q',
        options: [
          { optionName: '香草', code: 'A' },
          { optionName: '巧克力', code: 'B' },
          { optionName: '草莓', code: 'C' },
        ]
      },
      {
        questId: 5,
        need: true,
        questName: '麵包',
        type: 'M',
        options: [
          { optionName: '吐司', code: 'A' },
          { optionName: '波羅', code: 'B' },
          { optionName: '法國', code: 'C' },
        ]
      },
    ]
  }

  newQuestArray: Array<any> = [];
  radioData!: string;
  ngclassBoolean = false;
  userName!: string;
  userPhone!: string;
  userEmail!: string;
  userAge!: string;
  title!: string;
  sDate!: string;
  eDate!: string;
  explain!: string;
  isAdmin = false;

  constructor(
    private questService: QuestService,
    private router: Router,
    private userService: UserSrevice,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin;
    this.title = this.quest.title;
    this.sDate = this.quest.sDate;
    this.eDate = this.quest.eDate;
    this.explain = this.quest.explain;
    // 當我們判斷service中沒有這個資料 就等於不是從預覽回來需要重新組合資料
    if (!this.questService.questData) {
      this.tidyQuestArray();
    } else {
      // 當有資料的話就要將使用者的資料塞進欄位
      this.title = this.questService.questData.title;
      this.sDate = this.questService.questData.sDate;
      this.eDate = this.questService.questData.eDate;
      this.explain = this.questService.questData.explain;
      this.userName = this.questService.questData.userName;
      this.userPhone = this.questService.questData.userPhone;
      this.userEmail = this.questService.questData.userEmail;
      this.userAge = this.questService.questData.userAge;
      this.newQuestArray = this.questService.questData.questArray;
    }
  }

  tidyQuestArray() {
    // 在每一筆資料裡面加入兩個欄位answer跟radioAnswer
    // 分別拿來給文字輸入(answer)跟單選(radioAnswer)放他的答案
    for (let array of this.quest.questArray) {
      this.newQuestArray.push({ ...array, answer: '', radioAnswer: '' });
      // 上者等於下者寫法
      // this.newQuestArray.push({
      //   questId: array.questId,
      //   need: array.need,
      //   questName: array.questName,
      //   type: array.type,
      //   options: array.options,
      //   answer: '',
      //   radioAnswer: '' });
    }

    // 在問題的選擇中加入boxBoolean讓checkbox去進行資料綁定
    for (let newArray of this.newQuestArray) {
      let options = [];
      for (let option of newArray.options) {
        options.push({ ...option, boxBoolean: false });
      }
      newArray.options = options;
    }

  }

  goPreview() {
    // 判斷完必填都結束後將資料打包並換頁
    if (this.checkNeed()) {
      this.questService.questData = {
        title: this.quest.title,
        sDate: this.quest.sDate,
        eDate: this.quest.eDate,
        explain: this.quest.explain,
        userName: this.userName,
        userPhone: this.userPhone,
        userEmail: this.userEmail,
        userAge: this.userAge,
        questArray: this.newQuestArray
      }

      this.router.navigate(['/preview']);
    };
  }

  checkNeed(): boolean {
    if (!this.userName || !this.userPhone) {
      alert('請確認必填皆有填寫');
      return false;
    };

    for (let quest of this.newQuestArray) {
      if (quest.need) {
        // 多選M 單選Q 文字輸入T
        if (quest.type == 'M') {
          let check = false;
          for (let option of quest.options) {
            if (option.boxBoolean) {
              check = true;
            }
          }

          if (!check) {
            alert('請確認必填皆有填寫');
            return false;
          }

        } else if (quest.type == 'Q') {
          if (!quest.radioAnswer) {
            alert('請確認必填皆有填寫');
            return false;
          }
        } else if (quest.type == 'T') {
          if (!quest.answer) {
            alert('請確認必填皆有填寫');
            return false;
          }
        }
      }
    }
    return true;
  }

  goBack() {
    this.router.navigate(['/forth']);
  }

  adminGoBack() {
    this.router.navigate(['/tabs-admin/add-option']);
  }

  save() {
    this.questService.questData = null;
    this.router.navigate(['/list-admin']);
  }

}

