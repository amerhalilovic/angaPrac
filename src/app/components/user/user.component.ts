import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies :string[];
  hello:any;
  posts:Post[]
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 

  console.log('counstructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit ran..');
    this.name="John Doe";
    this.email="test@test.com"
    this.age = 30;
    this.address= {
      street: "50 Main st",
      city: "Boston",
      state: "MA"
    }
    this.hobbies = ["Write code","Watch movies","Listen to music"];

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts=posts;
    });
  }
    onClick(){
      this.name = "Amer Halilovic"
      this.hobbies.push ('New hobby');
    }

  addHobby(hobby){
    this.hobbies.unshift(hobby)
  }

  deleteHobby(hobby){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit =!this.isEdit;
    
  }

}


interface Address {
  street:string,
  city:string,
  state:string

}

interface Post {
  id:number,
  title:string,
  userId:number
}