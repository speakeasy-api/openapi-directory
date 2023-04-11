import { SpeakeasyBase } from "../../../internal/utils";
import { InitialTerm } from "./initialterm";
import { RenewalTerm } from "./renewalterm";
export declare enum TermsAndConditionsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}
/**
 * Information about an order action of type `TermsAndConditions`.
 *
 * @remarks
 *
 */
export declare class TermsAndConditions extends SpeakeasyBase {
    autoRenew?: boolean;
    /**
     * The length of the period for the current subscription term.
     */
    initialTerm?: InitialTerm;
    renewalSetting?: TermsAndConditionsRenewalSettingEnum;
    renewalTerms?: RenewalTerm[];
}
