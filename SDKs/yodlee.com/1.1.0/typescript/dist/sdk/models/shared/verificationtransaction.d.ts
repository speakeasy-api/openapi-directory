import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum VerificationTransactionBaseTypeEnum {
    Credit = "CREDIT",
    Debit = "DEBIT"
}
export declare class VerificationTransaction extends SpeakeasyBase {
    amount: Money;
    baseType: VerificationTransactionBaseTypeEnum;
}
