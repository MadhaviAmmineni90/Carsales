import { Injectable } from '@angular/core';
import { ICars } from './cars';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CarService {

    constructor(private _http: Http) { }
    getCars(): Observable<ICars[]> {
        return this._http.get("http://localhost:60367/Api/Cars")
            .map((response: Response) => <ICars[]>response.json())
    }
}