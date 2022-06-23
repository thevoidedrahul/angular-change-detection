import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Child2Component } from "./child2.component";
import { SubChild1Module } from "./sub.child1/sub.child1.module";
import { SubChild2Module } from "./sub.child2/sub.child2.module";
import { SubChild3Module } from "./sub.child3/sub.child3.module";

@NgModule({
    declarations: [
        Child2Component
    ],
    imports: [
        CommonModule,
        SubChild1Module,
        SubChild2Module,
        SubChild3Module
    ],
    exports: [
        Child2Component
    ]
})

export class Child2Module { }