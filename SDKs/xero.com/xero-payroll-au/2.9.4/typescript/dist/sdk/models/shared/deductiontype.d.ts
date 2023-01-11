import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeductionTypeDeductionCategoryEnum {
    None = "NONE",
    Unionfees = "UNIONFEES",
    Workplacegiving = "WORKPLACEGIVING"
}
export declare class DeductionType extends SpeakeasyBase {
    accountCode?: string;
    currentRecord?: boolean;
    deductionCategory?: DeductionTypeDeductionCategoryEnum;
    deductionTypeID?: string;
    isExemptFromW1?: boolean;
    name?: string;
    reducesSuper?: boolean;
    reducesTax?: boolean;
    updatedDateUTC?: string;
}
export declare class DeductionTypeInput extends SpeakeasyBase {
    accountCode?: string;
    currentRecord?: boolean;
    deductionCategory?: DeductionTypeDeductionCategoryEnum;
    deductionTypeID?: string;
    isExemptFromW1?: boolean;
    name?: string;
    reducesSuper?: boolean;
    reducesTax?: boolean;
}
