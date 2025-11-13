import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  feedbackData = "";

  onDataReceived(data:string) {
    console.log("Data received:",data);
  }
  ngOnInit() {
    console.log("onInit function from parent called");
  }

}
