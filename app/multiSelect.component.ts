import {Component} from "angular2/core";
import {Select} from "ng2-select";

@Component({
  selector: "multi-select",
  templateUrl: "app/multiSelect.component.html",
  styleUrls: ["https://raw.githubusercontent.com/valor-software/ng2-select/master/components/css/ng2-select.css"],
  directives: [Select]
})
export class MultiSelectComponent {
  selection: Array<any>;
  possibleValues: Array<any>;
  hint: string;

  constructor() {
    this.hint = "Enter one or more values";
  }
}
