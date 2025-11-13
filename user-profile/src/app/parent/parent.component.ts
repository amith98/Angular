import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  userName = "John";
  userRole = "admin";

  ngOnInit() {
    console.log("onInit function called from parent");
  }

}
