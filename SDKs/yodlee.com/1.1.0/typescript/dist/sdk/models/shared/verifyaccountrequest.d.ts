import { SpeakeasyBase } from "../../../internal/utils";
import { VerifyTransactionCriteriaInput } from "./verifytransactioncriteria";
export declare enum VerifyAccountRequestContainerEnum {
    Bank = "bank",
    CreditCard = "creditCard",
    Investment = "investment",
    Insurance = "insurance",
    Loan = "loan",
    Reward = "reward",
    RealEstate = "realEstate",
    OtherAssets = "otherAssets",
    OtherLiabilities = "otherLiabilities"
}
export declare class VerifyAccountRequestInput extends SpeakeasyBase {
    accountId?: number;
    container?: VerifyAccountRequestContainerEnum;
    transactionCriteria: VerifyTransactionCriteriaInput[];
}
