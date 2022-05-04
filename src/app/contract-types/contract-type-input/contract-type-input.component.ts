import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContractType } from '../shared/contract-type.model';

@Component({
  selector: 'app-contract-type-input',
  templateUrl: './contract-type-input.component.html',
  styleUrls: ['./contract-type-input.component.css'],
})
export class ContractTypeInputComponent implements OnInit {
  @Input() contractType!: ContractType;
  @Output() cancel = new EventEmitter<void>();
  contractForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      name: new FormControl(this.contractType.name, [Validators.required]),
    });
  }

  onCancel() {
    this.cancel.emit();
  }

  log() {
    if (this.contractForm.get('name')?.valid) {
      console.log(this.contractForm.value.name);
    }
  }
}
