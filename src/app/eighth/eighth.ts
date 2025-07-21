import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-eighth',
  imports: [RouterLink,],
  templateUrl: './eighth.html',
  styleUrl: './eighth.scss'
})
export class Eighth {

 vegetableArray = ["高麗菜","高麗菜","高麗菜","高麗菜"];
 chartArray = [
  {
    id:"1",
    title:"水果水果",
    labels: ['香蕉', '蘋果', '橘子'],
    data: [12000, 3000, 9000],

  },
   {
    id:"2",
    title:"冰淇淋冰淇淋",
    labels: ['香草', '巧克力', '草莓'],
    data: [5000, 8000, 4000],

  }
 ]

  ngAfterViewInit(): void {
   for(let chartData of this.chartArray){
      let ctx = document.getElementById(chartData.id) as HTMLCanvasElement;

    // 設定數據
    let data = {
      // x 軸文字
      labels: chartData.labels,
      datasets: [
        {
          // 上方分類文字
          label: '統計結果',
          // 數據
          data: chartData.data,
          // 線與邊框顏色
          backgroundColor: [
            '#39C5BB',
            '#FF6699',
            '#333333',
          ],
          //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
          hoverOffset: 4,
        },
      ],
         options: {
        responsive: false,
        maintainAspectRatio: false
      }
      //  responsive: false：不會隨容器大小變動。
      // maintainAspectRatio: false：可以自訂寬高。
    };

    // 創建圖表
    let chart = new Chart(ctx, {
      //pie是圓餅圖,doughnut是環狀圖
      type: 'doughnut',
      data: data,
    });

   }

  }



}
