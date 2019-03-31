import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'edu-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class EduAutocompleteComponent implements OnInit, AfterViewInit {

  color: string;

  results: string[];

  search(event) {
    //todo: get results from service
    this.results = ["red","blue","green","white"];
  }

  constructor() { }

  ngOnInit() {

      //document.getElementById("UrlBar").style.display = "none";
     /* const els = self.iframeImplementation.nativeElement.contentDocument.getElementsByClassName('header');
      if (els.length > 0) {
        els[0].style.display = 'none';
      }*/
    
  }
  ngAfterViewInit() {
      //document.getElementById("UrlBar").style.display = "none";

  }

}
