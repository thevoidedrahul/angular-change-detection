import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Person } from "src/model/model";

@Component({
    selector: 'sub-child-3',
    templateUrl: './sub.child3.component.html',
    styleUrls: ['./sub.child3.component.scss']
})

export class SubChild3Component {
    @Input() person: Person = new Person();
    @Output() update: EventEmitter<number> = new EventEmitter();
}