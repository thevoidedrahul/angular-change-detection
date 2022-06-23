import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Child1Module } from "./child1/child1.module";
import { Child2Module } from "./child2/child2.module";
import { ParentComponent } from "./parent.component";

@NgModule({
    declarations: [
        ParentComponent
    ],
    imports: [
        CommonModule,
        Child1Module,
        Child2Module
    ],
    exports: [
        ParentComponent
    ]
})

export class ParentModule { }