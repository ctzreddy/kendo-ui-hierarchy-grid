import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { ProductsService } from '../../service/products.service';

@Component({
    selector: 'app-category-details',
    providers: [ProductsService],
    template: `
      <kendo-grid
          [data]="view | async"
          [loading]="view.loading"
          [pageSize]="5"
          [skip]="skip"
          [pageable]="true"
          [scrollable]="'none'"
          (pageChange)="pageChange($event)"
        >
      <kendo-grid-column field="ProductID" title="Product ID" width="120">
      </kendo-grid-column>
      <kendo-grid-column field="ProductName" title="Product Name">
      </kendo-grid-column>
      <kendo-grid-column field="UnitPrice" title="Unit Price" format="{0:c}">
      </kendo-grid-column>
      </kendo-grid>
  `
})
export class CategoryDetailComponent implements OnInit {

    /**
     * The category for which details are displayed
     */
    @Input() public category: Object;

    public view: Observable<GridDataResult>;
    public skip = 0;

    constructor(private productService: ProductsService) { }

    public ngOnInit(): void {
        this.view = this.productService.getProductsAsGridData();

        /*load products for the given category*/
        this.loadData();
    }

    private loadData(): void {
        this.productService.getProductsAsGridData();
    }
}
