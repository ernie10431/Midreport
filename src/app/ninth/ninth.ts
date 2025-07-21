import { DialogDel } from './../dialog-del/dialog-del';

import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { DataService } from '../@service/data-service';
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ninth',
  imports: [FormsModule, MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './ninth.html',
  styleUrl: './ninth.scss',

})
export class Ninth {
  readonly dialogDel = inject(MatDialog)
  inputData: string = '';
  inputData2: string = '';
  inputDataS: string = '';
  inputDataE: string = '';
  constructor(private service: DataService, private router: Router) { }
  displayedColumns: string[] = ['choose', 'position', 'names', 'state', 'start', 'endTime', 'result'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  goCount(element: any) {
    if (element.state === '已結束') {
      this.router.navigate(['/eighth']);
    }
    else if (element.state === '進行中') {
      this.router.navigate(['/seventh']);
    }
  }


  deleteSelected() {
    const dialogRef = this.dialogDel.open(DialogDel, {

    width: '300px',
    height:'180px',
    data: { message: '是否確認刪除？' }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // 使用者點了「確認」
      this.dataSource.data = this.dataSource.data.filter(item => !item.checked);
    }
    // 否則，點了「取消」，什麼都不做
  });


    // this.dataSource.data = this.dataSource.data.filter(item => !item.checked);
  }

  ngOnInit(): void {
    this.service.questionList.push(ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  InputChange() {
    let tidyData = [];
    for (let data of ELEMENT_DATA) {
      if (data.names.indexOf(this.inputData) != -1) {
        tidyData.push(data)
      }
    }
    console.log(3132)
    this.dataSource.data = tidyData;
  };

  InputChange2() {
    let tidyData = [];
    for (let data of ELEMENT_DATA) {
      if (data.state.indexOf(this.inputData2) != -1) {
        tidyData.push(data)
      }
    }
    console.log(3132)
    this.dataSource.data = tidyData;
  }

  onDateChange() {
  const startDate = this.inputDataS ? new Date(this.inputDataS+ 'T00:00:00') : null;
  const endDate = this.inputDataE ? new Date(this.inputDataE) : null;

  const tidyData = ELEMENT_DATA.filter(item => {
    const itemStart = new Date(item.start.replace(/-/g, '/'));  // 確保 iOS 格式兼容
    const itemEnd = new Date(item.endTime.replace(/-/g, '/'));

    // 條件邏輯：只比對有輸入的條件
    if (startDate && endDate) {
      return itemStart >= startDate && itemEnd <= endDate;
    } else if (startDate) {
      return itemStart >= startDate;
    } else if (endDate) {
      return itemEnd <= endDate;
    }
    return true; // 沒有輸入任何條件 → 全部都符合
  });



  this.dataSource.data = tidyData;
}

}

const ELEMENT_DATA: any[] = [
  { choose: '', position: "#1", names: '蘋果', state: "尚未開始", start: '2025/07/08', endTime: "2025/07/09", result: "前往", checked: false },
  { choose: '', position: "#2", names: '香蕉', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#3", names: '橘子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#4", names: '奇異果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#5", names: '西瓜', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#6", names: '榴槤', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往", checked: false },
  { choose: '', position: "#7", names: '草莓', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#8", names: '藍莓', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#9", names: '火龍果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#10", names: '芒果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#11", names: '鳳梨', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往", checked: false },
  { choose: '', position: "#12", names: '木瓜', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#13", names: '梨子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#14", names: '龍眼', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#15", names: '芭樂', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#16", names: '蘋果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往", checked: false },
  { choose: '', position: "#17", names: '香蕉', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#18", names: '橘子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#19", names: '奇異果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#20", names: '西瓜', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#21", names: '蘋果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往", checked: false },
  { choose: '', position: "#22", names: '香蕉', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#23", names: '橘子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#24", names: '奇異果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#25", names: '西瓜', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#26", names: '蘋果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往", checked: false },
  { choose: '', position: "#27", names: '香蕉', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#28", names: '橘子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#29", names: '奇異果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },
  { choose: '', position: "#30", names: '西瓜', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往", checked: false },

];

