import { SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";
export declare enum VerifyTransactionCriteriaBaseTypeEnum {
    Credit = "CREDIT",
    Debit = "DEBIT"
}
export declare enum VerifyTransactionCriteriaMatchedEnum {
    Complete = "COMPLETE",
    None = "NONE"
}
export declare class VerifyTransactionCriteriaInput extends SpeakeasyBase {
    amount: number;
    baseType?: VerifyTransactionCriteriaBaseTypeEnum;
    date: string;
    dateVariance?: string;
    keyword?: string;
}
export declare class VerifyTransactionCriteria extends SpeakeasyBase {
    amount: number;
    baseType?: VerifyTransactionCriteriaBaseTypeEnum;
    date: string;
    dateVariance?: string;
    keyword?: string;
    matched?: VerifyTransactionCriteriaMatchedEnum;
    verifiedTransaction?: Transaction[];
}
