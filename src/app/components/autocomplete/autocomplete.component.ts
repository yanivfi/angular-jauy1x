import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edu-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class EduAutocompleteComponent implements OnInit {

  color: string;

  results: string[];

  search(event) {
    //todo: get results from service
    this.results = ["red","blue","green","white"];
  }

  constructor() { }

  ngOnInit() {
  }
  

}
