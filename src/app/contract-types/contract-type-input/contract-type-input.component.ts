import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';

@Component({
  selector: 'app-contract-type-input',
  templateUrl: './contract-type-input.component.html',
  styleUrls: ['./contract-type-input.component.css'],
})
export class ContractTypeInputComponent implements OnInit {
  @Input() contractType!: ContractType;
  @Output() cancel = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onCancel() {
    this.cancel.emit();
  }
}
