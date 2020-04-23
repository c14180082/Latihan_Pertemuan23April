import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

 constructor(private route:ActivatedRoute) { }

  namaArr= ["sd"];
  penjelasanArr=[2];

  ngOnInit() {
    let nama = this.route.snapshot.paramMap.get('namaJurusan');
   // let penjelasan = this.route.snapshot.paramMap.get('penjelasanJurusan');
    this.namaArr.push(nama);
    //this.penjelasanArr.push(penjelasan);
  }
  

}