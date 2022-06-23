import { Component } from "@angular/core";
import { Person } from "src/model/model";

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})

export class ParentComponent {

    buttonUpdate: boolean = false;
    person: Person = new Person();

    updatePlus() {
        this.person.age = this.person.age + 1;
    }

    updateMinus() {
        this.person.age = this.person.age - 1;
    }

    updateReference() {
        let age = this.person.age;

        this.person = { name: 'Wishlist', age };
    }

    resetReference() {
        this.person = new Person();
    }

}