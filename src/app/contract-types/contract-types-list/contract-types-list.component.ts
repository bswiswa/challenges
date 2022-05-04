import { Component, OnInit } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';
import { CONTRACT_TYPES } from '../shared/mock-contract-types';

@Component({
  selector: 'app-contract-types-list',
  templateUrl: './contract-types-list.component.html',
  styleUrls: ['./contract-types-list.component.css'],
})
export class ContractTypesListComponent implements OnInit {
  contractTypes: ContractType[] = CONTRACT_TYPES;
  editing: ContractType | null = null;

  constructor() {}

  ngOnInit(): void {}

  onCancel() {
    this.editing = null;
  }

  onSelect(contractType: ContractType) {
    this.editing = contractType;
  }
}
