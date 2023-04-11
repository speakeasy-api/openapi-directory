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
 * @remarks
 *
 */
export declare class CreateOrderTermsAndConditions extends SpeakeasyBase {
    autoRenew?: boolean;
    /**
     * The length of the period for the current subscription term.
     */
    lastTerm?: LastTerm;
    renewalSetting?: CreateOrderTermsAndConditionsRenewalSettingEnum;
    renewalTerms?: RenewalTerm[];
}
