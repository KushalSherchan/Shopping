import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/dataStorage.service';
import { AuthService } from '../../auth/auth.service';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService,
              private router: Router) {}

  dataToServer() {
    this.dataStorageService.saveToServer().
    subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  getDataFromServer() {
    this.dataStorageService.getDataServer();
  }

  logout() {
    this.authService.serverLogOut();
    this.router.navigate(['/']);
  }

  isAuthen(): boolean {
    return this.authService.isAuthenticated();
  }
}
