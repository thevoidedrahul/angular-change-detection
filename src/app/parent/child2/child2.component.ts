import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";
import { Person } from "src/model/model";

@Component({
    selector: 'child-2',
    templateUrl: './child2.component.html',
    styleUrls: ['./child2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Child2Component {
    @Input() person: Person = new Person();
    @Output() update: EventEmitter<number> = new EventEmitter();

    constructor(private cdr: ChangeDetectorRef) {

    }

    detach() {
        this.cdr.detach();
    }

    checkNoChanges() {
        this.cdr.checkNoChanges();
    }

    reAttach() {
        this.cdr.reattach();
    }

    markForCheck() {
        this.cdr.markForCheck();
    }

    detectChanges() {
        this.cdr.detectChanges();
    }
}