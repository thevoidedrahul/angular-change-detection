import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Person } from "src/model/model";

@Component({
    selector: 'child-1',
    templateUrl: './child1.component.html',
    styleUrls: ['./child1.component.scss']
})

export class Child1Component {
    @Input() person: Person = new Person();
    @Output() update: EventEmitter<number> = new EventEmitter();
}