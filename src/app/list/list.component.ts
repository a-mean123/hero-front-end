import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heros : any;

  constructor( public _shared: SharedService ) { }

  ngOnInit(): void {

    this._shared.getAllHeros().subscribe(
      res=>{
        this.heros = res;
        
      },
      err=>{
        console.log(err);
        
      }
    );

  }


  delete(id: any){
      this._shared.deleteHero(id).subscribe(
        response=>{
          this.ngOnInit();
        },
        err=>{
          console.log(err);
          
        }
      ); 
  }



}
