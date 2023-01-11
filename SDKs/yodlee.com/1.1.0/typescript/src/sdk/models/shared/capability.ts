import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CapabilityContainerEnum {
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


export class Capability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: CapabilityContainerEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
