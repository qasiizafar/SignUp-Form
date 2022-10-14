import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SigupDTO } from './sign-up/classes/sigup-dto';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  SigupDTO: SigupDTO = new SigupDTO();

  constructor(
    private http : HttpClient 
  ) {

   }
   
readonly baseURL='https://localhost:44395/api/Accessories';
getDetails(SigupDTO : SigupDTO){
 return this.http.post(this.baseURL,SigupDTO)
}
}
