import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Http} from "@angular/http"

@Injectable() 
export class LugaresService{


  constructor (private afDB: AngularFireDatabase, private http: Http){}

	public getLugares(){
		return this.afDB.list('lugares/');
	} 
	public getLugar(id){
		return this.afDB.object('lugares/'+id);
	}
	public guardarLugar(lugar){
		
		this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
		}
	public obtenerGeoData(direccion){
//		http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia
		return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
	}
	public editarLugar(lugar){
		
		this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
		}

}

