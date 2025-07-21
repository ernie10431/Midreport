import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Tenth } from './tenth/tenth';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterOutlet,RouterLinkActive,RouterLink,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


constructor(private router:Router,private eRef: ElementRef){ }

  protected title = 'Mid-tern-report-2';

  readonly dialog = inject(MatDialog);
  // 設全域變數

  openChat() {
   this.router.navigate(["/third"])
  }

  showDialog() {
    const dialogRet = this.dialog.open(Tenth, {
      data: '要傳進去的值',
      width: '500px'
    });

    dialogRet.afterClosed().subscribe((res) => {
      if (res) {
        console.log(res)
      }
    })
  }



  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  add() {
    this.router.navigate(["/first"])
  }

  logout() {
    this.router.navigate(["/forth"])
  }

  goSetting() {
    this.router.navigate(["/ninth"])
  }



  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    // 如果點擊的不是這個 fab 元素內的東西，就關閉
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

}
