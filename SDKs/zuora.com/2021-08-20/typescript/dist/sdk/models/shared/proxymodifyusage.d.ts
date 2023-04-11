import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Usage object.
 *
 * @remarks
 *
 */
export declare class ProxyModifyUsage extends SpeakeasyBase {
    /**
     *  The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation.
     *
     * @remarks
     * **Character limit**: 29 **Values**: a valid date and time value
     */
    endDateTime?: Date;
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
     *  Specifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in **Billing Settings**.
     *
     * @remarks
     * **Character limit**: **Values**: a valid unit of measure
     */
    uom?: string;
}
