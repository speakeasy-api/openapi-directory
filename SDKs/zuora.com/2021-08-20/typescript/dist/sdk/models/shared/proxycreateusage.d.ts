import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Usage object.
 *
 * @remarks
 *
 */
export declare class ProxyCreateUsage extends SpeakeasyBase {
    /**
     *  The ID of the account associated with the usage data. This field is only required if no value is specified for the `AccountNumber` field.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid account ID.
     */
    accountId?: string;
    /**
     *  The number of the account associated with the usage data. This field is only required if no value is specified for the `AccountId` field.
     *
     * @remarks
     * **Character limit**: 50 **Values**: a valid account number.
     */
    accountNumber?: string;
    /**
     *  The OrginalId of the rate plan charge related to the usage record, e.g., `2c9081a03c63c94c013c6873357a0117` **Character limit**: 32 **Values**: a valid rate plan charge OriginalID.
     */
    chargeId?: string;
    /**
     * A unique number for the rate plan charge related to the usage record. For example, C-00000007.
     *
     * @remarks
     *
     */
    chargeNumber?: string;
    /**
     * A description of the usage record.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     *  The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation.
     *
     * @remarks
     * **Character limit**: 29 **Values**: a valid date and time value.
     */
    endDateTime?: Date;
    /**
     *  Indicates the number of units used.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid decimal amount equal to or greater than 0
     */
    quantity: number;
    /**
     *  The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the `EndDateTime`, the `StartDateTime` field does affect usage calculation.
     *
     * @remarks
     * **Character limit**: 29 **Values**: a valid date and time value
     */
    startDateTime: Date;
    /**
     *  The date when usage was submitted.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    submissionDateTime?: Date;
    /**
     * The ID of the subscription that contains the fees related to the usage data.
     *
     * @remarks
     *
     * The ID of a subscription might change when you create amendments to the subscription. It is good practice to use the unique subscription number that you can specify in the `SubscriptionNumber` field.
     *
     */
    subscriptionId?: string;
    /**
     * The unique identifier number of the subscription that contains the fees related to the usage data.
     *
     * @remarks
     *
     * It is good practice to use this field when creating usage records.
     *
     */
    subscriptionNumber?: string;
    /**
     *  Specifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in **Billing Settings**.
     *
     * @remarks
     * **Character limit**: **Values**: a valid unit of measure
     */
    uom: string;
}
