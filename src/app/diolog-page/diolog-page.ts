import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-diolog-page',
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './diolog-page.html',
  styleUrl: './diolog-page.scss'
})
export class DiologPage {
readonly dialogRef = inject(MatDialogRef<DiologPage>);
readonly data = inject<any>(MAT_DIALOG_DATA);
}
