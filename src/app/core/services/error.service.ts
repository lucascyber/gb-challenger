import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../shared/components/error/error.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(public dialog: MatDialog) { }

  openDialog(message): void {
    const dialogRef = this.dialog.open(ErrorComponent, {
      width: '300px',
      data: message
    });
  }
}
