import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';

@Component({
  selector: 'app-contract-type-item',
  templateUrl: './contract-type-item.component.html',
  styleUrls: ['./contract-type-item.component.css'],
})
export class ContractTypeItemComponent implements OnInit {
  @Input() contractType!: ContractType;
  @Output() select = new EventEmitter<ContractType>();
  constructor() {}

  ngOnInit(): void {}

  onClick(contractType: ContractType) {
    this.select.emit(contractType);
  }
}
