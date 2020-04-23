import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShowComponent } from './show/show.component';

const ROUTES : Routes = [
  //{path: 'show', component: ShowComponent },
  {path: 'show/:namaJurusan', component: ShowComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, ShowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
