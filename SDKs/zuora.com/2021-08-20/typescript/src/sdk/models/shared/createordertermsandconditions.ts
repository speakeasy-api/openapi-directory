import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastTerm } from "./lastterm";
import { RenewalTerm } from "./renewalterm";


export enum CreateOrderTermsAndConditionsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}


// CreateOrderTermsAndConditions
/** 
 * Information about an order action of type `TermsAndConditions`.
 * 
**/
export class CreateOrderTermsAndConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastTerm" })
  lastTerm?: LastTerm;

  @SpeakeasyMetadata({ data: "json, name=renewalSetting" })
  renewalSetting?: CreateOrderTermsAndConditionsRenewalSettingEnum;

  @SpeakeasyMetadata({ data: "json, name=renewalTerms", elemType: RenewalTerm })
  renewalTerms?: RenewalTerm[];
}
