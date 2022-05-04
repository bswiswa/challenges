import { Component, OnInit } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';
import { ContractTypeService } from '../shared/contract-type.service';
import { CONTRACT_TYPES } from '../shared/mock-contract-types';

@Component({
  selector: 'app-contract-types-list',
  templateUrl: './contract-types-list.component.html',
  styleUrls: ['./contract-types-list.component.css'],
})
export class ContractTypesListComponent implements OnInit {
  contractTypes: ContractType[] = [];

  constructor(private contractTypeService: ContractTypeService) {}

  ngOnInit(): void {
    this.contractTypes = this.contractTypeService.getTypes();
  }

  onCancelEditing(index: number) {
    this.contractTypeService.toggleEdit(index);
  }

  onClick(index: number) {
    this.contractTypeService.toggleEdit(index);
  }
}
