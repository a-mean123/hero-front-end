import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  myFile : any;

  hero = {
    name:'',
    power:0,
    image:''
  }


  select(e: any){

      this.myFile = e.target.files[0];

      
  }



  ajout(){

    let fd = new FormData();
    fd.append('name' , this.hero.name);
    fd.append('power' , this.hero.power.toString());
    fd.append('image' , this.myFile);

    this._shared.create(fd).subscribe(

      (res)=>{
        this.router.navigate([ '/' ]);
      },
      (err)=>{
        console.log(err);
        
      }

    )

  }
  
  constructor( private _shared : SharedService , private router: Router) { }

  ngOnInit(): void {
  }

}
