import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Usage object.
 *
 * @remarks
 *
 */
export declare class GETUsageType extends SpeakeasyBase {
    /**
     * Customer account ID.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * Customer account name.
     *
     * @remarks
     *
     */
    accountName?: string;
    /**
     * Customer account number.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * Number of the rate-plan charge that pays for this usage.
     *
     * @remarks
     *
     */
    chargeNumber?: string;
    /**
     * Unique ID for the usage item.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Number of units used.
     *
     * @remarks
     *
     */
    quantity?: string;
    /**
     * Source of the usage data. Possible values are: `Import`, `API`.
     *
     * @remarks
     *
     */
    sourceName?: string;
    /**
     * Start date of the time period in which usage is tracked. Zuora uses this field value to determine the usage date.
     *
     * @remarks
     *
     */
    startDateTime?: Date;
    /**
     * Possible values are: `Importing`, `Pending`, `Processed`.
     *
     * @remarks
     *
     */
    status?: string;
    /**
     * Date when usage was submitted.
     *
     * @remarks
     *
     */
    submissionDateTime?: Date;
    /**
     * Number of the subscription covering this usage.
     *
     * @remarks
     *
     */
    subscriptionNumber?: string;
    /**
     * Unit used to measure consumption.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
