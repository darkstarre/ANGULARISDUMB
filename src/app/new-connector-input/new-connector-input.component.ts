import { Component, EventEmitter, OnInit, Output, HostListener, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-connector-input',
  templateUrl: './new-connector-input.component.html',
  styleUrls: ['./new-connector-input.component.scss'],
  host: {'class': 'col-4'}
})
export class NewConnectorInputComponent implements OnInit {
  @Input() NewConnector
  ngOnInit() { }
  }