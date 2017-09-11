import { Component } from '@angular/core';
import {LugaresService} from '../services/lugares.service';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {

  lat:any=14.0726558;
  lng:any=-87.1928261;
  lugares=null;
  constructor(private lugaresService: LugaresService){
    // this.lugares = lugaresService.getLugares();
    lugaresService.getLugares()
      .subscribe(lugares =>{
        this.lugares = lugares;
        console.log(this.lugares);
      });
  }
  // public buscarLugar(id){
  //   return this.lugares.filter((lugar)=>{return lugar.id==id})[0]||null;
  // }

}
