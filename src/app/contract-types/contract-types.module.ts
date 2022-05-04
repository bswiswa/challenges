import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractTypesListComponent } from './contract-types-list/contract-types-list.component';
import { ContractTypeInputComponent } from './contract-type-input/contract-type-input.component';
import { ContractTypeItemComponent } from './contract-type-item/contract-type-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContractTypesListComponent,
    ContractTypeInputComponent,
    ContractTypeItemComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContractTypesListComponent],
})
export class ContractTypesModule {}
