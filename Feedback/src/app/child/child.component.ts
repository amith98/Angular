import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() data:string|any;

  @Output() dataSent = new EventEmitter<string>();

  sendData(){
    this.dataSent.emit("Feedback received");

  }

  ngOnInit() {
    console.log("onInit function from child called");
  }

}
