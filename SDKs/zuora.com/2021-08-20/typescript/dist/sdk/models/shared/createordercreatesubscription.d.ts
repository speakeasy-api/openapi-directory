import { SpeakeasyBase } from "../../../internal/utils";
import { RenewalTerm } from "./renewalterm";
import { CreateOrderRatePlanOverride } from "./createorderrateplanoverride";
export declare enum CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}
export declare enum CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}
/**
 * Information about the first term of the subscription.
 *
**/
export declare class CreateOrderCreateSubscriptionTermsInitialTerm extends SpeakeasyBase {
    period?: number;
    periodType?: CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum;
    startDate?: Date;
    termType: CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum;
}
export declare enum CreateOrderCreateSubscriptionTermsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}
/**
 * Container for the terms and renewal settings of the subscription.
 *
**/
export declare class CreateOrderCreateSubscriptionTerms extends SpeakeasyBase {
    autoRenew?: boolean;
    initialTerm: CreateOrderCreateSubscriptionTermsInitialTerm;
    renewalSetting?: CreateOrderCreateSubscriptionTermsRenewalSettingEnum;
    renewalTerms?: RenewalTerm[];
}
/**
 * Information about an order action of type `CreateSubscription`.
 *
**/
export declare class CreateOrderCreateSubscription extends SpeakeasyBase {
    invoiceSeparately?: boolean;
    newSubscriptionOwnerAccount?: Record<string, string>;
    notes?: string;
    subscribeToRatePlans?: CreateOrderRatePlanOverride[];
    subscriptionNumber?: string;
    subscriptionOwnerAccountNumber?: string;
    terms?: CreateOrderCreateSubscriptionTerms;
}
