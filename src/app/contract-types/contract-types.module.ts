import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractTypesListComponent } from './contract-types-list/contract-types-list.component';

@NgModule({
  declarations: [ContractTypesListComponent],
  imports: [CommonModule],
  exports: [ContractTypesListComponent],
})
export class ContractTypesModule {}
