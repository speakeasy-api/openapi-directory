import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderRatePlanOverride } from "./createorderrateplanoverride";
import { RenewalTerm } from "./renewalterm";
/**
 * Unit of time that the first term is measured in. Only applicable if the value of the `termType` field is `TERMED`.
 *
 * @remarks
 *
 */
export declare enum CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}
/**
 * Type of the first term. If the value of this field is `TERMED`, the first term has a predefined duration based on the value of the `period` field. If the value of this field is `EVERGREEN`, the first term does not have a predefined duration.
 *
 * @remarks
 *
 */
export declare enum CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}
/**
 * Information about the first term of the subscription.
 *
 * @remarks
 *
 */
export declare class CreateOrderCreateSubscriptionTermsInitialTerm extends SpeakeasyBase {
    /**
     * Duration of the first term in months, years, days, or weeks, depending on the value of the `periodType` field. Only applicable if the value of the `termType` field is `TERMED`.
     *
     * @remarks
     *
     */
    period?: number;
    /**
     * Unit of time that the first term is measured in. Only applicable if the value of the `termType` field is `TERMED`.
     *
     * @remarks
     *
     */
    periodType?: CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum;
    /**
     * Start date of the first term, in YYYY-MM-DD format.
     *
     * @remarks
     *
     */
    startDate?: Date;
    /**
     * Type of the first term. If the value of this field is `TERMED`, the first term has a predefined duration based on the value of the `period` field. If the value of this field is `EVERGREEN`, the first term does not have a predefined duration.
     *
     * @remarks
     *
     */
    termType: CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum;
}
/**
 * Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is `TERMED`.
 *
 * @remarks
 *
 * * `RENEW_WITH_SPECIFIC_TERM` - Each renewal term has a predefined duration. The first entry in `renewalTerms` specifies the duration of the second term of the subscription, the second entry in `renewalTerms` specifies the duration of the third term of the subscription, and so on. The last entry in `renewalTerms` specifies the ultimate duration of each renewal term.
 * * `RENEW_TO_EVERGREEN` - The second term of the subscription does not have a predefined duration.
 *
 */
export declare enum CreateOrderCreateSubscriptionTermsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}
/**
 * Container for the terms and renewal settings of the subscription.
 *
 * @remarks
 *
 */
export declare class CreateOrderCreateSubscriptionTerms extends SpeakeasyBase {
    /**
     * Specifies whether the subscription automatically renews at the end of the each term. Only applicable if the type of the first term is `TERMED`.
     *
     * @remarks
     *
     */
    autoRenew?: boolean;
    /**
     * Information about the first term of the subscription.
     *
     * @remarks
     *
     */
    initialTerm: CreateOrderCreateSubscriptionTermsInitialTerm;
    /**
     * Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is `TERMED`.
     *
     * @remarks
     *
     * * `RENEW_WITH_SPECIFIC_TERM` - Each renewal term has a predefined duration. The first entry in `renewalTerms` specifies the duration of the second term of the subscription, the second entry in `renewalTerms` specifies the duration of the third term of the subscription, and so on. The last entry in `renewalTerms` specifies the ultimate duration of each renewal term.
     * * `RENEW_TO_EVERGREEN` - The second term of the subscription does not have a predefined duration.
     *
     */
    renewalSetting?: CreateOrderCreateSubscriptionTermsRenewalSettingEnum;
    /**
     * List of renewal terms of the subscription. Only applicable if the type of the first term is `TERMED` and the value of the `renewalSetting` field is `RENEW_WITH_SPECIFIC_TERM`.
     *
     * @remarks
     *
     */
    renewalTerms?: RenewalTerm[];
}
/**
 * Information about an order action of type `CreateSubscription`.
 *
 * @remarks
 *
 */
export declare class CreateOrderCreateSubscription extends SpeakeasyBase {
    /**
     * Specifies whether the subscription appears on a separate invoice when Zuora generates invoices.
     *
     * @remarks
     *
     */
    invoiceSeparately?: boolean;
    newSubscriptionOwnerAccount?: Record<string, string>;
    /**
     * Notes about the subscription. These notes are only visible to Zuora users.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * List of rate plans associated with the subscription.
     *
     * @remarks
     *
     */
    subscribeToRatePlans?: CreateOrderRatePlanOverride[];
    /**
     * Subscription number of the subscription. For example, A-S00000001.
     *
     * @remarks
     *
     * If you do not set this field, Zuora will generate the subscription number.
     *
     */
    subscriptionNumber?: string;
    /**
     * Account number of an existing account that will own the subscription. For example, A00000001.
     *
     * @remarks
     *
     * If you do not set this field or the `newSubscriptionOwnerAccount` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `newSubscriptionOwnerAccount` field.
     *
     */
    subscriptionOwnerAccountNumber?: string;
    /**
     * Container for the terms and renewal settings of the subscription.
     *
     * @remarks
     *
     */
    terms?: CreateOrderCreateSubscriptionTerms;
}
