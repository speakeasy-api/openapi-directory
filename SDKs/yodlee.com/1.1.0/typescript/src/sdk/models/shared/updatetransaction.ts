import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescriptionInput } from "./description";


export enum UpdateTransactionCategorySourceEnum {
    System = "SYSTEM",
    User = "USER"
}

export enum UpdateTransactionContainerEnum {
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


export class UpdateTransactionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId: number;

  @SpeakeasyMetadata({ data: "json, name=categorySource" })
  categorySource: UpdateTransactionCategorySourceEnum;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container: UpdateTransactionContainerEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: DescriptionInput;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;
}
