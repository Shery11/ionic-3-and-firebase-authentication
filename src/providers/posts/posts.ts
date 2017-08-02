import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostsProvider {

  constructor() {
    console.log('Hello PostsProvider Provider');
  }


   posts = [];


   load(){
    this.posts = [
      {title: 'Hello 1' , summary: 'somthing'},
      {title: 'Hello 2' , summary: 'somthing'},
      {title: 'Hello 3' , summary: 'somthing'},
      {title: 'Hello 4' , summary: 'somthing'}
    ]
  }

}
