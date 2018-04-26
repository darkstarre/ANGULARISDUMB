import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Connector, connectors } from '../data-model';

@Injectable()
export class ConnectorService {

  getConnectors(): Observable<Connector[]> {
    return (connectors);
  }

  updateConnector(connector: Connector): Observable<Connector> {
    const oldConnector = connectors.find(c => c.id === connector.id);
    const newConnector = Object.assign(oldConnector, connector);
    return (newConnector);
  }

  // add(payload) {
  //   return this.http.post(`/connectors`);
  // }

  // remove(payload) {
  //   return this.http.delete(`/connectors/${payload.id}.json`);
  // }

  // update(payload) {
  //   return this.http.patch(`/connectors/${payload.id}.json`, payload);
  // }
}