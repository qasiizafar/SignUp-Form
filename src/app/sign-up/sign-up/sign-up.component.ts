import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignUpService } from '../sign-up.service';
import { SigupDTO } from './classes/sigup-dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SigupDTO  : SigupDTO;
  formGrp: FormGroup;
  
  constructor(
    private service : SignUpService,
   private formBuilder: FormBuilder,
   private toastr: ToastrService
  ) { 
    this.SigupDTO= new SigupDTO();
   
    this.formGrp = formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailctrl: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required]],
    repeatNewPassword: ['', [Validators.required]],
    }, {validator: this.passwordMatchValidator}
    )
    
  }

  ngOnInit(): void {

   
    }
    

    get emailid(){
      return this.formGrp.controls;
    }



    passwordMatchValidator(frm: FormGroup) {
      return frm.controls['newPassword'].value === frm.controls['repeatNewPassword'].value ? null : {'mismatch': true};
    }

    getDetails(){
      debugger;
      this.service.getDetails(this.SigupDTO).subscribe(res =>{
        this.resetForm();
     this.showSuccess();
      },
      error=>{
        console.log(error);
      }
      );
    }
    resetForm(){
      this.SigupDTO.first_Name="";
      this.SigupDTO.last_Name="";
      this.SigupDTO.email_Address="";
      this.SigupDTO.password="";
      this.SigupDTO.confirm_Password="";

    }
    showSuccess() {
      this.toastr.success('Saved!', 'Successfully');
    }



}
