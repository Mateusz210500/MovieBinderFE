import { Injectable, NgModule } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable()
@NgModule()
export class JwtService {
  constructor(){}

  DecodeToken(token: string): string {
    return jwt_decode(token);
    }
}
