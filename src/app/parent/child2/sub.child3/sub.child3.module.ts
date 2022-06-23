import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SubChild3Component } from "./sub.child3.component";

@NgModule({
    declarations: [
        SubChild3Component
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SubChild3Component
    ]
})

export class SubChild3Module { }