import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.dataSource";


@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [ StaticDataSource, ProductRepository]
})
export class ModelModule {

}