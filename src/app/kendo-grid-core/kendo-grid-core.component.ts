import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Observable } from 'rxjs/Observable';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
    selector: 'app-kendo-grid-core',
    templateUrl: './kendo-grid-core.component.html',
    styleUrls: ['./kendo-grid-core.component.css']
})
export class AppKendoGridCoreComponent implements OnInit, AfterViewInit {

    public view: Observable<GridDataResult>;
    public sort: Array<SortDescriptor> = [];
    public pageSize = 10;
    public skip = 0;

    @ViewChild(GridComponent) grid: GridComponent;

    constructor(private productService: ProductsService) { }

    public ngOnInit(): void {
        // Bind directly to the service as it is a Subject
        this.view = this.productService.getProductsAsGridData();

        // // Fetch the data with the initial state
        this.loadData();
    }

    public ngAfterViewInit(): void {
        // Expand the first row initially
        // this.grid.expandRow(0);
    }

    public dataStateChange({ skip, take, sort }: DataStateChangeEvent): void {
        // Save the current state of the Grid component
        this.skip = skip;
        this.pageSize = take;
        this.sort = sort;

        // Reload the data with the new state
        this.loadData();
    }

    private loadData(): void {
        this.productService.getProductsAsGridData();
    }

}
