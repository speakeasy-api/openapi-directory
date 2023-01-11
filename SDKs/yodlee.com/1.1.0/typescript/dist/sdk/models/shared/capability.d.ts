import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CapabilityContainerEnum {
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
export declare class Capability extends SpeakeasyBase {
    container?: CapabilityContainerEnum[];
    name?: string;
}
