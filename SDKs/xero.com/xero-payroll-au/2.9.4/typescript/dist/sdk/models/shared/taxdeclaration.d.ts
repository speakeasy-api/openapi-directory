import { SpeakeasyBase } from "../../../internal/utils";
import { EmploymentBasisEnum } from "./employmentbasisenum";
import { ResidencyStatusEnum } from "./residencystatusenum";
import { TfnExemptionTypeEnum } from "./tfnexemptiontypeenum";
export declare class TaxDeclaration extends SpeakeasyBase {
    approvedWithholdingVariationPercentage?: number;
    australianResidentForTaxPurposes?: boolean;
    eligibleToReceiveLeaveLoading?: boolean;
    employeeID?: string;
    employmentBasis?: EmploymentBasisEnum;
    hasHELPDebt?: boolean;
    hasSFSSDebt?: boolean;
    hasStudentStartupLoan?: boolean;
    hasTradeSupportLoanDebt?: boolean;
    residencyStatus?: ResidencyStatusEnum;
    tfnExemptionType?: TfnExemptionTypeEnum;
    taxFileNumber?: string;
    taxFreeThresholdClaimed?: boolean;
    taxOffsetEstimatedAmount?: number;
    updatedDateUTC?: string;
    upwardVariationTaxWithholdingAmount?: number;
}
export declare class TaxDeclarationInput extends SpeakeasyBase {
    approvedWithholdingVariationPercentage?: number;
    australianResidentForTaxPurposes?: boolean;
    eligibleToReceiveLeaveLoading?: boolean;
    employeeID?: string;
    employmentBasis?: EmploymentBasisEnum;
    hasHELPDebt?: boolean;
    hasSFSSDebt?: boolean;
    hasStudentStartupLoan?: boolean;
    hasTradeSupportLoanDebt?: boolean;
    residencyStatus?: ResidencyStatusEnum;
    tfnExemptionType?: TfnExemptionTypeEnum;
    taxFileNumber?: string;
    taxFreeThresholdClaimed?: boolean;
    taxOffsetEstimatedAmount?: number;
    upwardVariationTaxWithholdingAmount?: number;
}
