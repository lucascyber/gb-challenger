import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-panel-template',
  templateUrl: './panel-template.component.html',
  styleUrls: ['./panel-template.component.scss']
})
export class PanelTemplateComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  doLogout() {
    this.authService.logout();
  }

}
