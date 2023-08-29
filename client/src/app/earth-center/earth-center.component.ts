import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { charToNum } from 'src/shared/utilities/common';
import { CommonService } from '../services/common.service';

interface CharToNumMapping {
  [key: string]: string;
}

@Component({
  selector: 'app-earth-center',
  templateUrl: './earth-center.component.html',
  styleUrls: ['./earth-center.component.scss'],
})
export class EarthCenterComponent {
  userForm: FormGroup;
  CHARTONUMBER: CharToNumMapping = charToNum;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _service: CommonService
  ) {
    this.userForm = this.fb.group({
      userMsg: [''],
    });
  }

  onSubmit() {
    const userMsg = this.userForm.get('userMsg')?.value;
    const msgArr = userMsg.split('');
    let martianMsg = '';

    for (const char of userMsg) {
      const lowerCaseChar = char.toLowerCase();
      if (charToNum.hasOwnProperty(lowerCaseChar)) {
        martianMsg += this.CHARTONUMBER[lowerCaseChar];
      }
    }

    const msg = {
      'response from earth': userMsg,
      'nokia translation': martianMsg,
    };
    console.log('earth-sender and mars-receiver');

    this._service.postMsg(msg).subscribe((res) => console.log(res));

    this._router.navigate(['/api/earth-mars-comm/message']);
  }
}
