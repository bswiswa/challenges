import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTypesListComponent } from './contract-types-list.component';

describe('ContractTypesListComponent', () => {
  let component: ContractTypesListComponent;
  let fixture: ComponentFixture<ContractTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
