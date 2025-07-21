import { Component, ViewChild } from '@angular/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Example } from '../@services/example';

@Component({
  selector: 'app-sixth',
  imports: [MatTabsModule, RouterOutlet, RouterLink, FormsModule,
    MatTableModule, MatPaginatorModule, CommonModule],
  templateUrl: './sixth.html',
  styleUrl: './sixth.scss'
})
export class Sixth {

}
