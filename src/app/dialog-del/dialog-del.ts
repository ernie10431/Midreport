import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-del',
  imports: [MatDialogContent,FormsModule,MatDialogTitle,MatDialogActions],
  templateUrl: './dialog-del.html',
  styleUrl: './dialog-del.scss'
})
export class DialogDel {
open(dialogDel: DialogDel, arg1: { width: string; data: { message: string; }; }) {
  throw new Error('Method not implemented.');
}
readonly dialogRef = inject(MatDialogRef<DialogDel>);
readonly data = inject<any>(MAT_DIALOG_DATA);

onConfirm(): void {
    this.dialogRef.close(true);  // 回傳 true 表示確認刪除
  }

  onCancel(): void {
    this.dialogRef.close(false); // 回傳 false 表示取消
  }
}
