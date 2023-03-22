import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [ ModelModule, BrowserModule],    //module dependency
    declarations: [StoreComponent],   //@Component, @Pipe or @Directive
    exports: [StoreComponent],
    providers: []
})
export class StoreModule {

}