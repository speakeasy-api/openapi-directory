import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChargeMetricsResponse extends SpeakeasyBase {
    /**
     * The ID of the corresponding amendment that results in the charge metrics record.
     *
     * @remarks
     *
     */
    amendmentId?: string;
    /**
     * The type of the corresponding amendment that results in the charge metrics record.
     *
     * @remarks
     *
     */
    amendmentType?: string;
    /**
     * The corresponding charge number of the charge metrics record.
     *
     * @remarks
     *
     */
    chargeNumber?: string;
    /**
     * The date and time when the charge metrics record was created, in `yyyy-mm-ddThh:mm:ssZ` format.
     *
     * @remarks
     *
     */
    createdOn?: Date;
    /**
     * The currency of the charge metrics record.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * Whether the charge metrics record is deleted.
     *
     * @remarks
     *
     */
    deleted?: boolean;
    /**
     * The end date of the charge metrics record.
     *
     * @remarks
     *
     */
    endDate?: Date;
    /**
     * The ID of the charge metrics record.
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
     * The discount amount for the MRR.
     *
     * @remarks
     *
     * See [Monthly Recurring Revenue](https://knowledgecenter.zuora.com/Billing/Subscriptions/Customer_Accounts/A_How_to_Manage_Customer_Accounts/E_Key_Metrics/B_Monthly_Recurring_Revenue) for more MRR information.
     *
     */
    mrrDiscountAmount?: number;
    /**
     * The Gross MRR amount before discounts charges are applied.
     *
     * @remarks
     *
     * See [Monthly Recurring Revenue](https://knowledgecenter.zuora.com/Billing/Subscriptions/Customer_Accounts/A_How_to_Manage_Customer_Accounts/E_Key_Metrics/B_Monthly_Recurring_Revenue) for more MRR information.
     *
     */
    mrrGrossAmount?: number;
    /**
     * The NET MRR amount after discounts charges are applied.
     *
     * @remarks
     *
     * See [Monthly Recurring Revenue](https://knowledgecenter.zuora.com/Billing/Subscriptions/Customer_Accounts/A_How_to_Manage_Customer_Accounts/E_Key_Metrics/B_Monthly_Recurring_Revenue) for more MRR information.
     *
     */
    mrrNetAmount?: number;
    /**
     * The corresponding product ID of the charge metrics record.
     *
     * @remarks
     *
     */
    productId?: string;
    /**
     * The corresponding product rate plan charge ID of the charge metrics record.
     *
     * @remarks
     *
     */
    productRatePlanChargeId?: string;
    /**
     * The corresponding product rate plan ID of the charge metrics record.
     *
     * @remarks
     *
     */
    productRatePlanId?: string;
    /**
     * The corresponding rate plan charge ID of the charge metrics record.
     *
     * @remarks
     *
     */
    ratePlanChargeId?: string;
    /**
     * The start date of the charge metrics record.
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
     * The discount amount for the TCV.
     *
     * @remarks
     *
     */
    tcvDiscountAmount?: number;
    /**
     * The Gross TCV amount before discount charges are applied.
     *
     * @remarks
     *
     */
    tcvGrossAmount?: number;
    /**
     * The Net TCV amount after discount charges are applied.
     *
     * @remarks
     *
     */
    tcvNetAmount?: number;
    /**
     * The date and time when the charge metrics record was last updated, in `yyyy-mm-ddThh:mm:ssZ` format.
     *
     * @remarks
     *
     */
    updatedOn?: Date;
}
