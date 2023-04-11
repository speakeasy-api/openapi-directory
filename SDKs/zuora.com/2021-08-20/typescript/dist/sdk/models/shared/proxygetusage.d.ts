import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Usage object.
 *
 * @remarks
 *
 */
export declare class ProxyGetUsage extends SpeakeasyBase {
    /**
     *  The ID of the account associated with the usage data. This field is required if no value is specified for the `AccountNumber` field.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid account ID
     */
    accountId?: string;
    /**
     *  The number of the account associated with the usage data. This field is required if no value is specified for the `AccountId` field.
     *
     * @remarks
     * **Character limit**: 50 **Values**: a valid account number
     */
    accountNumber?: string;
    /**
     *  The OrginalId of the rate plan charge related to the usage record, e.g., `2c9081a03c63c94c013c6873357a0117` **Character limit**: 32 **Values**: a valid rate plan charge OriginalID
     */
    chargeId?: string;
    /**
     *  The user ID of the person who uploaded the usage records.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the usage was generated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
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
     * **Character limit**: 29 **Values**: a valid date and time value
     */
    endDateTime?: Date;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  Indicates the number of units used.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid decimal amount equal to or greater than 0
     */
    quantity?: number;
    /**
     *  Indicates if the rating and billing engine (RBE) processed usage data for an invoice.
     *
     * @remarks
     * **Character limit**: 9 **Values**: automatically generated to be one of the following values: `Importing`, `Pending`, `Processed`
     */
    rbeStatus?: string;
    /**
     *  Indicates if the usage records were imported from the web-based UI or the API.
     *
     * @remarks
     * **Character limit**: 6 **Values**: automatically generated to be one of the following values: `API`, `Import`
     */
    sourceType?: string;
    /**
     *  The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the `EndDateTime`, the `StartDateTime` field does affect usage calculation.
     *
     * @remarks
     * **Character limit**: 29 **Values**: a valid date and time value
     */
    startDateTime?: Date;
    /**
     *  The date when usage was submitted.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    submissionDateTime?: Date;
    /**
     *  The ID of the subscription that contains the fees related to the usage data.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid subscription ID
     */
    subscriptionId?: string;
    /**
     * The unique identifier number of the subscription that contains the fees related to the usage data.
     *
     * @remarks
     *
     */
    subscriptionNumber?: string;
    /**
     *  Specifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in **Billing Settings**.
     *
     * @remarks
     * **Character limit**: **Values**: a valid unit of measure
     */
    uom?: string;
    /**
     *  The ID of the user who last updated the usage upload.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the usage upload was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
