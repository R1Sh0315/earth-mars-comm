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
      Object.entries(res).forEach((el) => {
        const message = { ...el[1] };
        delete message['_id'];
        console.log(message);
        this.msgLog.push(JSON.stringify(message));
      });

      console.log(this.msgLog[0]);
    });
  }
}
