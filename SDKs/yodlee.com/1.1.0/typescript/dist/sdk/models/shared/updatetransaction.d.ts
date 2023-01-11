import { SpeakeasyBase } from "../../../internal/utils";
import { DescriptionInput } from "./description";
export declare enum UpdateTransactionCategorySourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum UpdateTransactionContainerEnum {
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
export declare class UpdateTransactionInput extends SpeakeasyBase {
    categoryId: number;
    categorySource: UpdateTransactionCategorySourceEnum;
    container: UpdateTransactionContainerEnum;
    description?: DescriptionInput;
    memo?: string;
}
