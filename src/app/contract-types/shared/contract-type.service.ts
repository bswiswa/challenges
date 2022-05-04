import { Injectable } from '@angular/core';
import { ContractType } from './contract-type.model';
import { CONTRACT_TYPES } from './mock-contract-types';

@Injectable({
  providedIn: 'root',
})
export class ContractTypeService {
  contractTypes!: ContractType[];

  constructor() {
    this.contractTypes = [...CONTRACT_TYPES];
  }

  getTypes(): ContractType[] {
    return this.contractTypes;
  }

  toggleEdit(index: number) {
    this.contractTypes[index].editing = !this.contractTypes[index].editing;
  }
}
