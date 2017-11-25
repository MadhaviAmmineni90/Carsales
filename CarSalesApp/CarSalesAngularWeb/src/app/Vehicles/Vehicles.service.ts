import { Injectable } from '@angular/core';
import { ICars, IBikes } from './Vehicles';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Injectable()

export class VehicleService {

    ///Cars Component

    headers: Headers;
    options: RequestOptions;
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }
    getCars(): Observable<ICars[]> {

        return this._http.get("http://localhost:60367/Api/Vehicle")
            .map((response: Response) => <ICars[]>response.json())
    }
    postCars(url: string, model: ICars): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post("http://localhost:60367/Api/Vehicle", body, options)
            .map((response: Response) => <ICars>response.json())
            .catch(this.handleError);
    }

    //Bikes Component

    getBikes(): Observable<IBikes[]> {

        return this._http.get("http://localhost:60367/Api/Vehicle")
            .map((response: Response) => <IBikes[]>response.json())
    }

    postBikes(url: string, model: IBikes): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post("http://localhost:60367/Api/Vehicle", body, options)
            .map((response: Response) => <IBikes>response.json())
            .catch(this.handleError);
    }
}