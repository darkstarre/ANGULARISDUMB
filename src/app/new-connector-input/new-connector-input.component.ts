import { Component, EventEmitter, OnInit, Output, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-connector-input',
  templateUrl: './new-connector-input.component.html',
  styleUrls: ['./new-connector-input.component.scss'],
  host: {'class': 'col-4'}
})
export class NewConnectorInputComponent implements OnInit {
  @Output() onConnectorAdd = new EventEmitter<string>();

  newConnectorForm: FormGroup;

  // @HostListener('document:keypress', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.code === "Enter" && this.form.valid) {
  //     this.addConnector(this.newConnectorForm.controls['text'].value);
  //   }
  // }

  // constructor() {}
  constructor(
    fb FormBuilder {
    // this.newConnectorForm = fb.group({
    //   'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    // });

    this.newConnectorForm.valueChanges.pipe(
      filter((value) => this.newConnectorForm.valid),
      debounceTime(500),
      takeWhile(() => this.alive)
    ).subscribe(data => {
      console.log(data);
      });
  }

  ngOnInit() {
  }

  addConnector(text) {
    this.onConnectorAdd.emit(text);
    this.newConnectorForm.controls['text'].setValue('');
  }
}
