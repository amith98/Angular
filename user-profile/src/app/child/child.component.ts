import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() nameData:string = "";
  @Input() roleData:string = "";

  ngOnInit() {
    console.log("onInit function called from child");
  }

}
