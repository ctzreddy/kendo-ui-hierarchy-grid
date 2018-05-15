import { Injectable } from '@angular/core';
import { products } from './products';
import { Http, Response } from '@angular/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class ProductsService {


    constructor(private http: Http) {

    }

    public getProducts(): any[] {
        return products;
    }


    public getProductsAsGridData(): Observable<GridDataResult> {
        return this.http.get('')
        .pipe(
            map(response => (<GridDataResult>{
                data: this.getProducts(),
                total: 15
            })),
            tap(() => 'Error loading data')
        );
    }




    // public getFooBars(onNext: (fooBars: GridDataResult[]) => void) {
    //     this.http
    //         .get('')
    //         .map(response => response.json() as GridDataResult[])
    //         .subscribe(onNext,
    //             error =>
    //                 console.log('An error occurred when requesting api/foobar.', error));
    // }


}
