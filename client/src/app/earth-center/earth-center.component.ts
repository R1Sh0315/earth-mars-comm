import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-earth-center',
  templateUrl: './earth-center.component.html',
  styleUrls: ['./earth-center.component.scss'],
})
export class EarthCenterComponent {
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

    console.log(userMsg)
    this._service.postMsg({userMsg: userMsg, location: 'earth'}).subscribe((res) => console.log(res));

    this._router.navigate(['/api/earth-mars-comm/message']);
  }
}
