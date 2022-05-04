import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractTypesListComponent } from './contract-types-list/contract-types-list.component';
import { ContractTypeInputComponent } from './contract-type-input/contract-type-input.component';
import { ContractTypeItemComponent } from './contract-type-item/contract-type-item.component';

@NgModule({
  declarations: [ContractTypesListComponent, ContractTypeInputComponent, ContractTypeItemComponent],
  imports: [CommonModule],
  exports: [ContractTypesListComponent],
})
export class ContractTypesModule {}
