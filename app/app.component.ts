import {Component} from "angular2/core";
import {SearchResult} from "./searchResult";
import {MultiSelectComponent} from "./multiSelect.component";

@Component({
  selector: "my-app",
  templateUrl: "app/app.component.html",
  directives: [MultiSelectComponent]
})
export class AppComponent {
  title = "Insight Transaction Search";
  instructions = "Enter one or more search terms below and click Search. Click a transaction to view its details.";
  results = [
    new SearchResult("11123", "Error: Success", new Date("2016-04-18T23:51:19.1733570Z")),
    new SearchResult("12345", "A thing occurred. Oh noes.", new Date("2016-04-18T23:55:19.2822110Z")),
    new SearchResult("11112", "Yet Another Uncaught Exception", new Date("2016-04-18T23:51:06.7935290Z")),
    new SearchResult("11234", "Shit's broke dawg", new Date("2016-04-18T23:52:19.6194810Z"))
  ];
}
