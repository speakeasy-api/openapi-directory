import { SpeakeasyBase } from "../../../internal/utils";
import { CreditCard } from "./creditcard";
import { TaxInfo } from "./taxinfo";
import { RenewalTerm } from "./renewalterm";
import { RatePlanOverride } from "./rateplanoverride";
/**
 * Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
 *
 * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 *
 * If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
 *
**/
export declare class CreateSubscriptionNewSubscriptionOwnerAccount extends SpeakeasyBase {
    accountNumber?: string;
    autoPay?: boolean;
    batch?: string;
    billCycleDay: number;
    billToContact: Record<string, any>;
    communicationProfileId?: string;
    creditCard?: CreditCard;
    crmId?: string;
    currency: string;
    customFields?: Record<string, any>;
    hpmCreditCardPaymentMethodId?: string;
    invoiceDeliveryPrefsEmail?: boolean;
    invoiceDeliveryPrefsPrint?: boolean;
    invoiceTemplateId?: string;
    name: string;
    notes?: string;
    parentId?: string;
    paymentGateway?: string;
    paymentMethod?: Record<string, any>;
    paymentTerm?: string;
    soldToContact?: Record<string, any>;
    taxInfo?: TaxInfo;
}
export declare enum CreateSubscriptionTermsInitialTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}
export declare enum CreateSubscriptionTermsInitialTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}
/**
 * Information about the first term of the subscription.
 *
**/
export declare class CreateSubscriptionTermsInitialTerm extends SpeakeasyBase {
    period?: number;
    periodType?: CreateSubscriptionTermsInitialTermPeriodTypeEnum;
    startDate?: Date;
    termType: CreateSubscriptionTermsInitialTermTermTypeEnum;
}
export declare enum CreateSubscriptionTermsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}
/**
 * Container for the terms and renewal settings of the subscription.
 *
**/
export declare class CreateSubscriptionTerms extends SpeakeasyBase {
    autoRenew?: boolean;
    initialTerm: CreateSubscriptionTermsInitialTerm;
    renewalSetting?: CreateSubscriptionTermsRenewalSettingEnum;
    renewalTerms: RenewalTerm[];
}
/**
 * Information about an order action of type `CreateSubscription`.
 *
**/
export declare class CreateSubscription extends SpeakeasyBase {
    invoiceSeparately?: boolean;
    newSubscriptionOwnerAccount?: CreateSubscriptionNewSubscriptionOwnerAccount;
    notes?: string;
    subscribeToRatePlans?: RatePlanOverride[];
    subscriptionNumber?: string;
    subscriptionOwnerAccountNumber?: string;
    terms?: CreateSubscriptionTerms;
}
