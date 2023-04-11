import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeductionTypeDeductionCategoryEnum {
    None = "NONE",
    Unionfees = "UNIONFEES",
    Workplacegiving = "WORKPLACEGIVING"
}
export declare class DeductionType extends SpeakeasyBase {
    /**
     * See Accounts
     */
    accountCode?: string;
    /**
     * Is the current record
     */
    currentRecord?: boolean;
    deductionCategory?: DeductionTypeDeductionCategoryEnum;
    /**
     * Xero identifier
     */
    deductionTypeID?: string;
    /**
     * Boolean to determine if the deduction type is reportable or exempt from W1
     */
    isExemptFromW1?: boolean;
    /**
     * Name of the earnings rate (max length = 100)
     */
    name?: string;
    /**
     * Most deductions don’t reduce your superannuation guarantee contribution liability, so typically you will not set any value for this.
     */
    reducesSuper?: boolean;
    /**
     * Indicates that this is a pre-tax deduction that will reduce the amount of tax you withhold from an employee.
     */
    reducesTax?: boolean;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
}
export declare class DeductionTypeInput extends SpeakeasyBase {
    /**
     * See Accounts
     */
    accountCode?: string;
    /**
     * Is the current record
     */
    currentRecord?: boolean;
    deductionCategory?: DeductionTypeDeductionCategoryEnum;
    /**
     * Xero identifier
     */
    deductionTypeID?: string;
    /**
     * Boolean to determine if the deduction type is reportable or exempt from W1
     */
    isExemptFromW1?: boolean;
    /**
     * Name of the earnings rate (max length = 100)
     */
    name?: string;
    /**
     * Most deductions don’t reduce your superannuation guarantee contribution liability, so typically you will not set any value for this.
     */
    reducesSuper?: boolean;
    /**
     * Indicates that this is a pre-tax deduction that will reduce the amount of tax you withhold from an employee.
     */
    reducesTax?: boolean;
}
