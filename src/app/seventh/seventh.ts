import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AnswerService } from '../@services/answer-service';

@Component({
  selector: 'app-seventh',
  imports: [FormsModule, MatTableModule, MatPaginatorModule,RouterLink],
  templateUrl: './seventh.html',
  styleUrl: './seventh.scss'
})
export class Seventh implements AfterViewInit {
  displayedColumns: string[] = ['position', 'names', 'start', 'result'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private answerService: AnswerService, private router: Router) {}

  ngAfterViewInit() {
    const answers = this.answerService.getAnswers();
    const transformed = answers.map((item, index) => ({
      position: `#${index + 1}`,
      names: item.userName,
      start: new Date().toISOString().slice(0, 10), // 填寫時間：現在
      result: '前往',
      index: index // 紀錄對應的 index 以利跳轉
    }));

    this.dataSource = new MatTableDataSource(transformed);
    this.dataSource.paginator = this.paginator;
  }

  goToResult(index: number) {
    this.router.navigate(['/readData', index]);
  }
}
