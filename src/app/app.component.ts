import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	//Two way binding
  nombre:string='';

  /// string interpolation
  title = 'PlatziSquare'; 
  a = 2;
  b= 10;

  //data binding
  listo= true;

  constructor(){
  	setTimeout(()=>{this.listo=false;}, 3000)
  }
  //event binding
  hacerAlgo(){
  	alert(this.listo);
  }


}
