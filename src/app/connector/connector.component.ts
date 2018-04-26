import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Connector, Config } from '../data-model';
import { ConnectorService } from '../services/connector.service';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss']
})
export class ConnectorComponent implements OnChanges {
  @Input() connector: Connector;

  connectorForm: FormGroup;
  configChangeLog: string[] = [];

  constructor(
    private fb: FormBuilder,
    private connectorService: ConnectorService) {
      this.createForm();
      this.logNameChange();
    }

    createForm() {
      this.connectorForm = this.fb.group({
        name: '',
        config: ''
      });
    }

    ngOnChanges() {
      this.rebuildForm();
    }

    rebuildForm() {
      this.connectorForm.reset({
        name: this.connector.name
      });
    }

    onSubmit() {
      this.connector = this.prepareSaveConnector();
      this.connectorService.updateConnector(this.connector).subscribe();
      this.rebuildForm();
    }

    prepareSaveConnector() {
      const formModel = this.connectorForm.value;

      const saveConnector: Connector = {
        id: this.connector.id,
        name: formModel.name as string
      };
      return saveConnector;
    }

    revert() { this.rebuildForm(); }

    logNameChange() {
      const nameControl = this.connectorForm.get('name');
      nameControl.valueChanges.forEach(
        (value: string) => this.configChangeLog.push(value)
      );
    }
}
