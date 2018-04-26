import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Connector } from '../data-model';
import { ConnectorService } from '../services/connector.service';

@Component({
  selector: 'app-connector-list',
  templateUrl: './connector-list.component.html',
  styleUrls: ['./connector-list.component.scss']
})
export class ConnectorListComponent implements OnInit {
 connectors: Observable<Connector[]>;
 isLoading = false;
 selectedConnector: Connector;

  constructor(private connectorService: ConnectorService) { }

  ngOnInit() { this.getConnectors(); }

  getConnectors() {
    this.isLoading = true;
    this.connectors = this.connectorService.getConnectors()
    .finally(() => this.isLoading = false);
    this.selectedConnector = undefined;
  }

  select(connector: Connector) { this.selectedConnector = connector; }
}
