import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChargeMetricsDiscountAllocationDetailResponse extends SpeakeasyBase {
    /**
     * The amendment id that result in the discount allocation detail record.
     *
     * @remarks
     *
     */
    amendmentId?: string;
    /**
     * The ID of the corresponding amendment that result in the discount allocation detail record.
     *
     * @remarks
     *
     */
    amendmentType?: string;
    /**
     * The ID of the corresponding charge metrics record.
     *
     * @remarks
     *
     */
    chargeMetricsId?: string;
    /**
     * The corresponding charge number of the discount allocation details record.
     *
     * @remarks
     *
     */
    chargeNumber?: string;
    /**
     * The date and time when the discount allocation detail record.
     *
     * @remarks
     *
     */
    createdOn?: Date;
    /**
     * The currency of the discount allocation detail record.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * Whether the discount allocation detail record is deleted.
     *
     * @remarks
     *
     */
    deleted?: boolean;
    /**
     * The number of the corresponding discount charge that leads to the discount allocation detail record.
     *
     * @remarks
     *
     */
    discountChargeNumber?: string;
    /**
     * The discount amount for the MRR of the discount allocation detail record.
     *
     * @remarks
     *
     * See [Monthly Recurring Revenue](https://knowledgecenter.zuora.com/Billing/Subscriptions/Customer_Accounts/A_How_to_Manage_Customer_Accounts/E_Key_Metrics/B_Monthly_Recurring_Revenue) for more MRR information.
     *
     */
    discountMrr?: number;
    /**
     * The discount amount for the TCV of the discount allocation detail record.
     *
     * @remarks
     *
     */
    discountTcv?: number;
    /**
     * The end date of the discount allocation detail record.
     *
     * @remarks
     *
     */
    endDate?: Date;
    /**
     * The ID of the discount allocation details record.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The account number of the corresponding invoice owner.
     *
     * @remarks
     *
     */
    invoiceOwnerAccountNumber?: string;
    /**
     * The corresponding product ID of the discount allocation details record.
     *
     * @remarks
     *
     */
    productId?: string;
    /**
     * The corresponding product rate plan charge ID of the discount allocation detail record.
     *
     * @remarks
     *
     */
    productRatePlanChargeId?: string;
    /**
     * The corresponding product rate plan ID of the discount allocation details record.
     *
     * @remarks
     *
     */
    productRatePlanId?: string;
    /**
     * The corresponding rate plan charge ID of the discount allocation details record.
     *
     * @remarks
     *
     */
    ratePlanChargeId?: string;
    /**
     * The start date of the discount allocation detail record.
     *
     * @remarks
     *
     */
    startDate?: Date;
    /**
     * The name of the corresponding subscription.
     *
     * @remarks
     *
     */
    subscriptionName?: string;
    /**
     * The account number of the corresponding subscription owner.
     *
     * @remarks
     *
     */
    subscriptionOwnerAccountNumber?: string;
    /**
     * The date and time when the discount allocation detail record.
     *
     * @remarks
     *
     */
    updatedOn?: Date;
}
