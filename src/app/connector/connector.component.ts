import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss']
})
export class ConnectorComponent implements OnInit {
  @Input() connector:any;

  constructor() { }

  ngOnInit() {
  }

}
