import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  constructor(private _service: CommonService) {}
  msgLog: any = [];
  ngOnInit(): void {
    this._service.getMsg().subscribe((res) => {
      Object.entries(res).map((el) => {
        console.log(JSON.stringify(Object.values(el)[1]));
        this.msgLog.push(JSON.stringify(Object.values(el)[1]));
      });
    });

    console.log(this.msgLog);
  }
}
