import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //public registerForm!:FormGroup;
  userurl=environment.userapi;
  registerForm= new FormGroup({
    Studentfirstname:new FormControl(''),
    studentlastname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmpassword:new FormControl(''),
    parentname:new FormControl(''),
    admissionnumber:new FormControl('') 
  })

  submitted = false;
  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors?.['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Studentfirstname: ['', [Validators.required,Validators.minLength(3),Validators.pattern("^(?=[a-zA-Z._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")]],
      studentlastname: ['', [Validators.required,Validators.minLength(3),Validators.pattern("^(?=[a-zA-Z._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]],
      confirmpassword: ['', Validators.required],
      parentname:['', [Validators.required,Validators.minLength(3),Validators.pattern("^(?=[a-zA-Z._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")]],
      admissionnumber:['', Validators.required],
      //cceptTerms: [false, Validators.requiredTrue]
     }, 
      { 
        validator:this. ConfirmedValidator('password', 'confirmpassword')
      }
     );
  }
  get f() { return this.registerForm.controls; }
  submitHandler(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      const Toast = swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'error',
        title: 'SignUp failed'
      })
      return ;
  }
   
    this.http.post<any>(this.userurl,this.registerForm.value)
    .subscribe(res=>{
      const Toast = swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'success',
        title: 'SignUp Successful'
      })
      this.registerForm.reset();
      this.router.navigate(['login']);
    })
    
  }

}
