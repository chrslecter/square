import {Injectable} from "@angular/core"
import {AngularFireDatabase} from "angularfire2/database/database"

@Injectable() 
export class LugaresService{

	lugares:any=[ 
  {id: 1, plan: 'pagado', cercania:1, distancia: 1, active: true, nombre:'floreria La gardenia', description:"Arreglos florales 24 horas"},
  {id: 2, plan: 'gratuito', cercania:1, distancia: 2, active: false, nombre:'Donas Hommer', description:"Donas y Cafe"},
  {id: 3, plan: 'pagado', cercania:2, distancia: 5, active: true, nombre:'Veterinaria El perro asustado', description:"No te preocupes, el perro esta asustado por nuestra eficacia"},
  {id: 4, plan: 'gratuito', cercania:2, distancia: 8, active: false, nombre:'Ganaderia', description:"Leche y mas"},
  {id: 5, plan: 'pagado', cercania:3, distancia: 10, active: true, nombre:' Hommer', description:"Hommer Clothing Line"},
  {id: 5, plan: 'pagado', cercania:3, distancia: 15, active: false, nombre:'Juas', description:"Juas Juas Juas"}
  ];

  constructor (private afDB: AngularFireDatabase){}

	public getLugares(){
		return this.lugares; 
	}
	public buscarLugar(id){
		return this.lugares.filter((lugar)=>{return lugar.id==id})[0]||null;
	}
	public guardarLugar(lugar){
		console.log(lugar);
		this.afDB.database.ref('lugares/1').set(lugar);
		}
}