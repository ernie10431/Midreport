import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Example {
name:string="";
number:string="";
email!:string;
age!:string;
question:any[]=[]

  constructor() { }
}
