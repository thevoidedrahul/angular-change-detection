import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Person } from "src/model/model";

@Component({
    selector: 'sub-child-2',
    templateUrl: './sub.child2.component.html',
    styleUrls: ['./sub.child2.component.scss']
})

export class SubChild2Component {

    @Input() person: Person = new Person();
    @Output() update: EventEmitter<boolean> = new EventEmitter();
}