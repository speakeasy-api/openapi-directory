import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETAmendmentType extends SpeakeasyBase {
    /**
     * Determines whether the subscription is automatically renewed, or whether it expires at the end of the term and needs to be manually renewed.
     *
     * @remarks
     *
     */
    autoRenew?: boolean;
    /**
     * The rate plan ID on which changes are made. Only the Update or Remove amendment returns a base rate plan ID.
     *
     * @remarks
     *
     */
    baseRatePlanId?: string;
    /**
     * The ID of the subscription based on which the amendment is created.
     *
     * @remarks
     *
     */
    baseSubscriptionId?: string;
    /**
     * The amendment code.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The date when the amendment becomes effective for billing purposes, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    contractEffectiveDate?: Date;
    /**
     * The length of the period for the current subscription term.
     *
     * @remarks
     *
     */
    currentTerm?: number;
    /**
     * The period type for the current subscription term.
     *
     * @remarks
     * Possible values are:
     *
     * - Month
     * - Year
     * - Day
     * - Week
     *
     */
    currentTermPeriodType?: string;
    /**
     * The date when the customer accepts the amendment changes to the subscription, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    customerAcceptanceDate?: Date;
    /**
     * Description of the amendment.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The ID of the account that the subscription is being transferred to.
     *
     * @remarks
     *
     */
    destinationAccountId?: string;
    /**
     * The ID of the invoice that the subscription is being transferred to.
     *
     * @remarks
     *
     */
    destinationInvoiceOwnerId?: string;
    /**
     * The date when the amendment changes take effective.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * The amendment ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The name of the amendment.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The ID of the rate plan charge on which amendment is made. Only the Add or Update amendment returns a new rate plan ID.
     *
     * @remarks
     *
     */
    newRatePlanId?: string;
    /**
     * The ID of the subscription that the amendment changes.
     *
     * @remarks
     *
     */
    newSubscriptionId?: string;
    /**
     * Specifies whether a termed subscription will remain termed or change to evergreen when it is renewed.
     *
     * @remarks
     * Possible values are:
     *
     * - RENEW_WITH_SPECIFIC_TERM
     * - RENEW_TO_EVERGREEN
     *
     */
    renewalSetting?: string;
    /**
     * The term of renewal for the amended subscription.
     *
     * @remarks
     *
     */
    renewalTerm?: number;
    /**
     * The period type for the subscription renewal term.
     *
     * @remarks
     * Possible values are:
     *
     * - Month
     * - Year
     * - Day
     * - Week
     *
     */
    renewalTermPeriodType?: string;
    /**
     * The date when the subscription resumption takes effect, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     * **Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     */
    resumeDate?: Date;
    /**
     * The date when service is activated, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    serviceActivationDate?: Date;
    /**
     * The date when the Update Product amendment takes effect.
     *
     * @remarks
     * Only for the Update Product amendments if there is already a future-dated Update Product amendment on
     * the subscription.
     *
     */
    specificUpdateDate?: Date;
    /**
     * The status of the amendment.
     *
     * @remarks
     * Possible values are:
     *
     * - Draft
     * - Pending Activation
     * - Pending Acceptance
     * - Completed
     *
     */
    status?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * The date when the subscription suspension takes effect, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     * **Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     */
    suspendDate?: Date;
    /**
     * The date when the new terms and conditions take effect.
     *
     * @remarks
     *
     */
    termStartDate?: Date;
    /**
     * Indicates if the subscription is `TERMED` or `EVERGREEN`.
     *
     * @remarks
     *
     */
    termType?: string;
    /**
     * Type of the amendment.
     *
     * @remarks
     * Possible values are:
     *
     * - Cancellation
     * - NewProduct
     * - OwnerTransfer
     * - RemoveProduct
     * - Renewal
     * - UpdateProduct
     * - TermsAndConditions
     *
     */
    type?: string;
}
