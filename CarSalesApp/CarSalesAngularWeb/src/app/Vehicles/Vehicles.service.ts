import { Injectable } from '@angular/core';
import { ICars } from './Vehicles';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class VehicleService {

    constructor(private _http: Http) { }
    getCars(): Observable<ICars[]> {

        return this._http.get("http://localhost:60367/Api/Vehicle")
            .map((response: Response) => <ICars[]>response.json())
    }
}