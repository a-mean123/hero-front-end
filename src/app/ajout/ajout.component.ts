import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  hero = {
    name:'',
    power:0,
    image:''
  }

  ajout(){
    this._shared.create(this.hero).subscribe(

      (res)=>{
        console.log(res);
        this.hero = {
          name:'',
          power:0,
          image:''
        }
      },
      (err)=>{
        console.log(err);
        
      }

    )

  }
  
  constructor( private _shared : SharedService ) { }

  ngOnInit(): void {
  }

}
