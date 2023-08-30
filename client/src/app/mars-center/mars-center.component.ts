import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

    this._service.postMsg({userMsg: userMsg, location: 'mars'}).subscribe((res) => console.log(res));
    this._router.navigate(['/api/earth-mars-comm/message']);
  }
}
