import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataService } from '../@service/data-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forth',
  imports: [FormsModule, MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './forth.html',
  styleUrl: './forth.scss'
})
export class Forth {

  constructor(private service: DataService) { }
  displayedColumns: string[] = ['position', 'names', 'state', 'start', 'endTime', 'result'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  inputData: string = ''

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    const openData = ELEMENT_DATA.filter(item=>item.state=="進行中")
    this.dataSource.data=openData;

    this.service.questionList.push(ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  InputChange() {
    let tidyData = [];
    for( let data of ELEMENT_DATA){
      if(data.names.indexOf(this.inputData)!=-1 && data.state==="進行中"){
        tidyData.push(data)
      }
    }
    console.log(3132)
    this.dataSource.data=tidyData;
  };
}



const ELEMENT_DATA: any[] = [
  { position: "#1", names: '蘋果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往" },
  { position: "#2", names: '香蕉', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#3", names: '橘子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#4", names: '奇異果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#5", names: '西瓜', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#6", names: '榴槤', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往" },
  { position: "#7", names: '草莓', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#8", names: '藍莓', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#9", names: '火龍果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#10", names: '芒果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#11", names: '鳳梨', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往" },
  { position: "#12", names: '木瓜', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#13", names: '梨子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#14", names: '龍眼', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#15", names: '芭樂', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#16", names: '蘋果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往" },
  { position: "#17", names: '水蜜桃', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#18", names: '橘子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#19", names: '奇異果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#20", names: '西瓜', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#21", names: '蘋果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往" },
  { position: "#22", names: '藍莓', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#23", names: '橘子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#24", names: '奇異果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#25", names: '西瓜', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#26", names: '蘋果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/09", result: "前往" },
  { position: "#27", names: '葡萄', state: "進行中", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#28", names: '橘子', state: "已結束", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#29", names: '奇異果', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },
  { position: "#30", names: '西瓜', state: "尚未開始", start: '2025/07/07', endTime: "2025/07/10", result: "前往" },

];
