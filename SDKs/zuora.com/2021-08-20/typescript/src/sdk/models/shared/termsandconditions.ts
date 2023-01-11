import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InitialTerm } from "./initialterm";
import { RenewalTerm } from "./renewalterm";


export enum TermsAndConditionsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}


// TermsAndConditions
/** 
 * Information about an order action of type `TermsAndConditions`.
 * 
**/
export class TermsAndConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=initialTerm" })
  initialTerm?: InitialTerm;

  @SpeakeasyMetadata({ data: "json, name=renewalSetting" })
  renewalSetting?: TermsAndConditionsRenewalSettingEnum;

  @SpeakeasyMetadata({ data: "json, name=renewalTerms", elemType: RenewalTerm })
  renewalTerms?: RenewalTerm[];
}
