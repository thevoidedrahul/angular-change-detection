import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SubChild1Component } from "./sub.child1.component";

@NgModule({
    declarations: [
        SubChild1Component
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SubChild1Component
    ]
})

export class SubChild1Module { }