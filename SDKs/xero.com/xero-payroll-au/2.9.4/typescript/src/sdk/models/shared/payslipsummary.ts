import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayslipSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deductions" })
  deductions?: number;

  @SpeakeasyMetadata({ data: "json, name=EmployeeGroup" })
  employeeGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeID?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=NetPay" })
  netPay?: number;

  @SpeakeasyMetadata({ data: "json, name=PayslipID" })
  payslipID?: string;

  @SpeakeasyMetadata({ data: "json, name=Reimbursements" })
  reimbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=Super" })
  super?: number;

  @SpeakeasyMetadata({ data: "json, name=Tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUTC?: string;

  @SpeakeasyMetadata({ data: "json, name=Wages" })
  wages?: number;
}


export class PayslipSummaryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deductions" })
  deductions?: number;

  @SpeakeasyMetadata({ data: "json, name=EmployeeGroup" })
  employeeGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeID?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=NetPay" })
  netPay?: number;

  @SpeakeasyMetadata({ data: "json, name=PayslipID" })
  payslipID?: string;

  @SpeakeasyMetadata({ data: "json, name=Reimbursements" })
  reimbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=Super" })
  super?: number;

  @SpeakeasyMetadata({ data: "json, name=Tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=Wages" })
  wages?: number;
}
