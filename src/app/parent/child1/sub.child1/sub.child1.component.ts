import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Person } from "src/model/model";

@Component({
    selector: 'sub-child-1',
    templateUrl: './sub.child1.component.html',
    styleUrls: ['./sub.child1.component.scss']
})

export class SubChild1Component {
    @Input() person: Person = new Person();
    @Output() update: EventEmitter<number> = new EventEmitter();
}