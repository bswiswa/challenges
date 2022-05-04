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

  constructor() {}

  ngOnInit(): void {}

  onCancelEditing(index: number) {
    this.toggleEdit(index);
  }

  onClick(index: number) {
    this.toggleEdit(index);
  }

  toggleEdit(index: number) {
    this.contractTypes[index].editing = !this.contractTypes[index].editing;
  }
}
