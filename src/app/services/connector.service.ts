import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConnectorService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`/connectors`);
  }

  // add(payload) {
  //   return this.http.post(`/connectors`);
  // }

  remove(payload) {
    return this.http.delete(`/connectors/${payload.id}.json`);
  }

  update(payload) {
    return this.http.patch(`/connectors/${payload.id}.json`, payload);
  }
}