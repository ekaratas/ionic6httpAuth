import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  URL = "https://reqres.in/api/";

  constructor(private httpClient:HttpClient) { }


login(bilgi)
  {
    return this.httpClient.post(this.URL + 'login', bilgi);
  }

  signup(bilgi)
  {
    return this.httpClient.post(this.URL + 'register', bilgi);
  }

}
