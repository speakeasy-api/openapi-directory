import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerifyTransactionCriteriaInput } from "./verifytransactioncriteria";


export enum VerifyAccountRequestContainerEnum {
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


export class VerifyAccountRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: VerifyAccountRequestContainerEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionCriteria", elemType: VerifyTransactionCriteriaInput })
  transactionCriteria: VerifyTransactionCriteriaInput[];
}
