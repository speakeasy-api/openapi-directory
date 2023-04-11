import { SpeakeasyBase } from "../../../internal/utils";
import { BillToContact } from "./billtocontact";
import { CreditCard } from "./creditcard";
import { PaymentMethod } from "./paymentmethod";
import { RatePlanOverride } from "./rateplanoverride";
import { RenewalTerm } from "./renewalterm";
import { SoldToContact } from "./soldtocontact";
import { TaxInfo } from "./taxinfo";
/**
 * Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
 *
 * @remarks
 *
 * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 *
 * If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
 *
 */
export declare class CreateSubscriptionNewSubscriptionOwnerAccount extends SpeakeasyBase {
    /**
     * Account number. For example, A00000001.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * Specifies whether future payments are automatically billed when they are due.
     *
     * @remarks
     *
     */
    autoPay?: boolean;
    /**
     * Name of the billing batch that the account belongs to. For example, Batch1.
     *
     * @remarks
     *
     */
    batch?: string;
    /**
     * Day of the month that the account prefers billing periods to begin on. If set to 0, the bill cycle day will be set as "AutoSet".
     *
     * @remarks
     *
     */
    billCycleDay: number;
    billToContact: BillToContact;
    /**
     * Internal identifier of the communication profile that Zuora uses when sending notifications to the account's contacts.
     *
     * @remarks
     *
     */
    communicationProfileId?: string;
    /**
     * Default payment method associated with an account. Only credit card payment methods are supported.
     *
     * @remarks
     *
     */
    creditCard?: CreditCard;
    /**
     * External identifier of the account in a CRM system.
     *
     * @remarks
     *
     */
    crmId?: string;
    /**
     * ISO 3-letter currency code (uppercase). For example, USD.
     *
     * @remarks
     *
     */
    currency: string;
    /**
     * Container for custom fields of an Account object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * The ID of the payment method associated with this account. The payment method specified for this field will be set as the default payment method of the account.
     *
     * @remarks
     *
     * If the `autoPay` field is set to `true`, you must provide the credit card payment method ID for either this field or the `creditCard` field,
     * but not both.
     *
     */
    hpmCreditCardPaymentMethodId?: string;
    /**
     * Specifies whether to turn on the invoice delivery method 'Email' for the new account.
     *
     * @remarks
     * Values are:
     *
     * * `true` (default). Turn on the invoice delivery method 'Email' for the new account.
     * * `false`. Turn off the invoice delivery method 'Email' for the new account.
     *
     */
    invoiceDeliveryPrefsEmail?: boolean;
    /**
     * Specifies whether to turn on the invoice delivery method 'Print' for the new account.
     *
     * @remarks
     * Values are:
     *
     * * `true`. Turn on the invoice delivery method 'Print' for the new account.
     * * `false` (default). Turn off the invoice delivery method 'Print' for the new account.
     *
     */
    invoiceDeliveryPrefsPrint?: boolean;
    /**
     * Internal identifier of the invoice template that Zuora uses when generating invoices for the account.
     *
     * @remarks
     *
     */
    invoiceTemplateId?: string;
    /**
     * Account name.
     *
     * @remarks
     *
     */
    name: string;
    /**
     * Notes about the account. These notes are only visible to Zuora users.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * Identifier of the parent customer account for this Account object. Use this field if you have customer hierarchy enabled.
     */
    parentId?: string;
    /**
     * The payment gateway that Zuora uses when processing electronic payments and refunds for the account. If you do not specify this field or if the value of this field is null, Zuora uses your default payment gateway.
     *
     * @remarks
     *
     */
    paymentGateway?: string;
    /**
     * Payment method to create for this new account. Supports all the payment methods that are supported in the "Create payment method" operation. See for more information about how to use this field in [Create payment method](https://www.zuora.com/developer/api-reference/#operation/POST_PaymentMethods).
     *
     * @remarks
     *
     */
    paymentMethod?: PaymentMethod;
    /**
     * Name of the payment term associated with the account. For example, "Net 30". The payment term determines the due dates of invoices.
     *
     * @remarks
     *
     */
    paymentTerm?: string;
    soldToContact?: SoldToContact;
    /**
     * Information about the tax exempt status of a customer account.
     *
     * @remarks
     *
     */
    taxInfo?: TaxInfo;
}
/**
 * Unit of time that the first term is measured in. Only applicable if the value of the `termType` field is `TERMED`.
 *
 * @remarks
 *
 */
export declare enum CreateSubscriptionTermsInitialTermPeriodTypeEnum {
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
export declare enum CreateSubscriptionTermsInitialTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}
/**
 * Information about the first term of the subscription.
 *
 * @remarks
 *
 */
export declare class CreateSubscriptionTermsInitialTerm extends SpeakeasyBase {
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
    periodType?: CreateSubscriptionTermsInitialTermPeriodTypeEnum;
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
    termType: CreateSubscriptionTermsInitialTermTermTypeEnum;
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
export declare enum CreateSubscriptionTermsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}
/**
 * Container for the terms and renewal settings of the subscription.
 *
 * @remarks
 *
 */
export declare class CreateSubscriptionTerms extends SpeakeasyBase {
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
    initialTerm: CreateSubscriptionTermsInitialTerm;
    /**
     * Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is `TERMED`.
     *
     * @remarks
     *
     * * `RENEW_WITH_SPECIFIC_TERM` - Each renewal term has a predefined duration. The first entry in `renewalTerms` specifies the duration of the second term of the subscription, the second entry in `renewalTerms` specifies the duration of the third term of the subscription, and so on. The last entry in `renewalTerms` specifies the ultimate duration of each renewal term.
     * * `RENEW_TO_EVERGREEN` - The second term of the subscription does not have a predefined duration.
     *
     */
    renewalSetting?: CreateSubscriptionTermsRenewalSettingEnum;
    /**
     * List of renewal terms of the subscription. Only applicable if the type of the first term is `TERMED` and the value of the `renewalSetting` field is `RENEW_WITH_SPECIFIC_TERM`.
     *
     * @remarks
     *
     */
    renewalTerms: RenewalTerm[];
}
/**
 * Information about an order action of type `CreateSubscription`.
 *
 * @remarks
 *
 */
export declare class CreateSubscription extends SpeakeasyBase {
    /**
     * Specifies whether the subscription appears on a separate invoice when Zuora generates invoices.
     *
     * @remarks
     *
     */
    invoiceSeparately?: boolean;
    /**
     * Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
     *
     * @remarks
     *
     * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
     *
     */
    newSubscriptionOwnerAccount?: CreateSubscriptionNewSubscriptionOwnerAccount;
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
    subscribeToRatePlans?: RatePlanOverride[];
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
    terms?: CreateSubscriptionTerms;
}
