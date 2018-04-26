import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-connector-list',
  templateUrl: './connector-list.component.html',
  styleUrls: ['./connector-list.component.scss']
})
export class ConnectorListComponent implements OnInit {
  @Input() connectors: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
