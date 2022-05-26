import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;



  constructor() {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm():void{
    this.form = new FormGroup({
      username:new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)] ),
      password:new FormControl(null, [Validators.minLength(2), Validators.minLength(20)]),
      confirmPassword:new FormControl(null, [Validators.minLength(2),Validators.maxLength(20)])
    },[this._checkPasswords])
  }


  register():void {
    console.log(this.form);
  }
  _checkPasswords(form:AbstractControl):ValidationErrors|null{
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    return password?.value === confirmPassword?.value?null:{notSame:true}
  }
}
