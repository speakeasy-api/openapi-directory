import { SpeakeasyBase } from "../../../internal/utils";
import { EmploymentBasisEnum } from "./employmentbasisenum";
import { ResidencyStatusEnum } from "./residencystatusenum";
import { TFNExemptionTypeEnum } from "./tfnexemptiontypeenum";
export declare class TaxDeclarationInput extends SpeakeasyBase {
    /**
     * If the employee has approved withholding variation. e.g (0 - 100)
     */
    approvedWithholdingVariationPercentage?: number;
    /**
     * If the employee is Australian resident for tax purposes. e.g true or false
     */
    australianResidentForTaxPurposes?: boolean;
    /**
     * If the employee is eligible to receive an additional percentage on top of ordinary earnings when they take leave (typically 17.5%). e.g true or false
     */
    eligibleToReceiveLeaveLoading?: boolean;
    /**
     * Address line 1 for employee home address
     */
    employeeID?: string;
    employmentBasis?: EmploymentBasisEnum;
    /**
     * If employee has HECS or HELP debt. e.g true or false
     */
    hasHELPDebt?: boolean;
    /**
     * If employee has financial supplement debt. e.g true or false
     */
    hasSFSSDebt?: boolean;
    /**
     * If the employee is eligible for student startup loan rules
     */
    hasStudentStartupLoan?: boolean;
    /**
     * If employee has trade support loan. e.g true or false
     */
    hasTradeSupportLoanDebt?: boolean;
    residencyStatus?: ResidencyStatusEnum;
    tfnExemptionType?: TFNExemptionTypeEnum;
    /**
     * The tax file number e.g 123123123.
     */
    taxFileNumber?: string;
    /**
     * If tax free threshold claimed. e.g true or false
     */
    taxFreeThresholdClaimed?: boolean;
    /**
     * If has tax offset estimated then the tax offset estimated amount. e.g 100
     */
    taxOffsetEstimatedAmount?: number;
    /**
     * If the employee has requested that additional tax be withheld each pay run. e.g 50
     */
    upwardVariationTaxWithholdingAmount?: number;
}
export declare class TaxDeclaration extends SpeakeasyBase {
    /**
     * If the employee has approved withholding variation. e.g (0 - 100)
     */
    approvedWithholdingVariationPercentage?: number;
    /**
     * If the employee is Australian resident for tax purposes. e.g true or false
     */
    australianResidentForTaxPurposes?: boolean;
    /**
     * If the employee is eligible to receive an additional percentage on top of ordinary earnings when they take leave (typically 17.5%). e.g true or false
     */
    eligibleToReceiveLeaveLoading?: boolean;
    /**
     * Address line 1 for employee home address
     */
    employeeID?: string;
    employmentBasis?: EmploymentBasisEnum;
    /**
     * If employee has HECS or HELP debt. e.g true or false
     */
    hasHELPDebt?: boolean;
    /**
     * If employee has financial supplement debt. e.g true or false
     */
    hasSFSSDebt?: boolean;
    /**
     * If the employee is eligible for student startup loan rules
     */
    hasStudentStartupLoan?: boolean;
    /**
     * If employee has trade support loan. e.g true or false
     */
    hasTradeSupportLoanDebt?: boolean;
    residencyStatus?: ResidencyStatusEnum;
    tfnExemptionType?: TFNExemptionTypeEnum;
    /**
     * The tax file number e.g 123123123.
     */
    taxFileNumber?: string;
    /**
     * If tax free threshold claimed. e.g true or false
     */
    taxFreeThresholdClaimed?: boolean;
    /**
     * If has tax offset estimated then the tax offset estimated amount. e.g 100
     */
    taxOffsetEstimatedAmount?: number;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
    /**
     * If the employee has requested that additional tax be withheld each pay run. e.g 50
     */
    upwardVariationTaxWithholdingAmount?: number;
}
