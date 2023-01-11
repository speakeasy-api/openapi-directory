import { SpeakeasyBase } from "../../../internal/utils";
import { LastTerm } from "./lastterm";
import { RenewalTerm } from "./renewalterm";
export declare enum CreateOrderTermsAndConditionsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}
/**
 * Information about an order action of type `TermsAndConditions`.
 *
**/
export declare class CreateOrderTermsAndConditions extends SpeakeasyBase {
    autoRenew?: boolean;
    lastTerm?: LastTerm;
    renewalSetting?: CreateOrderTermsAndConditionsRenewalSettingEnum;
    renewalTerms?: RenewalTerm[];
}
