import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBXQHdT-ke_e6Wx9IMbpzCxo4PqMritrKs',
      authDomain: 'ecommerce-a6d43.firebaseapp.com'
    });
  }
}
