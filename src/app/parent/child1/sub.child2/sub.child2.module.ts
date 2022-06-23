import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SubChild2Component } from "./sub.child2.component";

@NgModule({
    declarations: [
        SubChild2Component
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SubChild2Component
    ]
})

export class SubChild2Module { }