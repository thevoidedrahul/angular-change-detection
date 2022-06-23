import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Child1Component } from "./child1.component";
import { SubChild1Module } from "./sub.child1/sub.child1.module";
import { SubChild2Module } from "./sub.child2/sub.child2.module";

@NgModule({
    declarations: [
        Child1Component
    ],
    imports: [
        CommonModule,
        SubChild1Module,
        SubChild2Module
    ],
    exports: [
        Child1Component
    ]
})

export class Child1Module { }