import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router){}

  nama_jurusan = "";
  penjelasan_jurusan = "";


  Submit(){
    this.router.navigate(['/show',this.nama_jurusan,this.penjelasan_jurusan]);
    // this.namaArr.push(this.nama_jurusan);
    // this.penjelasanArr.push(this.penjelasan_jurusan);
  }

  Show_List(){
    this.router.navigate(['/show']);
  }
}
