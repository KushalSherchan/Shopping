 import * as firebase from 'firebase';
 import { Router } from '@angular/router';
 import { Injectable } from '@angular/core';
 import { ToastrService } from 'ngx-toastr';

 @Injectable()
 export class AuthService {
    token: string = null;

    constructor(private router: Router,
                private toastr: ToastrService) {}

    signUpUser(email: string, password: string) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          this.toastr.success('Sucessfully Registered');
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => this.toastr.warning(error)
      );
    }

    signInUser(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        () => {
            this.router.navigate(['/']);
            this.toastr.success('Successfully Signed In', 'Welcome');
            firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      ).catch(
        error => this.toastr.warning('UserName/Password Incorrect', 'Unsuccessful')
      );
    }

    getToken() {
      firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
      return this.token;
    }

    isAuthenticated() {
      return this.token != null;
    }

    serverLogOut() {
      firebase.auth().signOut();
      this.token = null;
    }
 }
