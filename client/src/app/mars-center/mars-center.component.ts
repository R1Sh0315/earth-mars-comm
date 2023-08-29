import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { charToNum } from 'src/shared/utilities/common';
import { CommonService } from '../services/common.service';

interface CharToNumMapping {
  [key: string]: string;
}

@Component({
  selector: 'app-mars-center',
  templateUrl: './mars-center.component.html',
  styleUrls: ['./mars-center.component.scss'],
})
export class MarsCenterComponent {
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
    const numArr: string[] = [];
    let currentGroup = '';

    for (let i = 0; i < userMsg.length; i++) {
      if (i === 0 || userMsg[i] === userMsg[i - 1]) {
        currentGroup += userMsg[i];
      } else {
        if (userMsg[i] !== '.') {
          numArr.push(currentGroup);
          currentGroup = userMsg[i];
        }
      }
    }

    if (currentGroup !== '') {
      numArr.push(currentGroup);
    }

    let numbToChar: { [key: string]: string } = this.convertNumbToChar(
      this.CHARTONUMBER
    );

    const outputText = this.convertToText(numArr, numbToChar);

    const msg = {
      'response from Mars': outputText,
      'nokia translation': userMsg,
    };

    console.log('mars-sender and earth-receiver');

    this._service.postMsg(msg).subscribe((res) => console.log(res));
    this._router.navigate(['/api/earth-mars-comm/message']);
  }

  convertNumbToChar(object: { [key: string]: string }) {
    const newObject: { [key: string]: string } = {};

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        newObject[value] = key;
      }
    }
    return newObject;
  }

  convertToText(input: string[], charArr: { [key: string]: string }): string {
    return input.map((item) => charArr[item] || '').join(''); // Join the converted items to form the text
  }
}
