import { Example } from './../@services/example';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-secend',
  imports: [FormsModule, MatTabsModule, MatTableModule, MatPaginatorModule, CommonModule,RouterLink],
  templateUrl: './secend.html',
  styleUrl: './secend.scss'
})
export class Secend {
  constructor(private teema:Example,private router:Router) { }

  inputText: string = '';           // 題目
  inputText2: string = '';          // 題目類型
  required: boolean = false;        // 是否必填

  items:any[] = [];

  addItem() {
    if (this.inputText.trim() !== '' && this.inputText2 !== '') {
      this.items.push({
        content: this.inputText.trim(),
        type: this.inputText2,
        required: this.required,
        answer:[...this.textboxes]
      });
      // 清空輸入
      this.inputText = '';
      this.inputText2 = '';
      this.required = false;
      this.textboxes=[]
    }


  }



  textboxes: string[] = [];   // 一開始先有一個

  addTextbox() {
    this.textboxes.push("");    // 每次按鈕就加一個空字串
  }


  goPreview(){
    this.teema.question = this.items;
    this.router.navigate(['./tenth'])
  }
}

