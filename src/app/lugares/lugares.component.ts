import { Component } from '@angular/core';
import {LugaresService} from '../services/lugares.service';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {

  lat:number = 14.009945537201785;
  lng:number= -87.01128959655762;
  lugares=null;
  constructor(private lugaresService: LugaresService){
    this.lugares = lugaresService.getLugares();
  }
  public buscarLugar(id){
    return this.lugares.filter((lugar)=>{return lugar.id==id})[0]||null;
  }

}
