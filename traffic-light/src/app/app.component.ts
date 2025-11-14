import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 currentLight = "";
 textColor = "";

 showRed(){
  this.currentLight = "red";
  this.textColor = "red";

 }
 showYellow() {
  this.currentLight = "yellow";
  this.textColor = "yellow";

 }
 showGreen() {
  this.currentLight = "green";
  this.textColor = "green";

 }

}
