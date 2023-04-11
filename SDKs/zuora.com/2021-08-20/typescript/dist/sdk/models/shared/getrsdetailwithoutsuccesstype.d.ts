import { SpeakeasyBase } from "../../../internal/utils";
import { GETRsRevenueItemType } from "./getrsrevenueitemtype";
/**
 * Container for custom fields of a Revenue Schedule object.
 *
 * @remarks
 *
 */
export declare class GETRSDetailWithoutSuccessType extends SpeakeasyBase {
    /**
     * An account ID.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The revenue schedule amount, which is the sum of all revenue items. This field cannot be null and must be formatted based on the currency, such as `JPY 30` or `USD 30.15`. Test out the currency to ensure you are using the proper formatting otherwise, the response will fail and this error message is returned: `Allocation amount with wrong decimal places.`
     *
     * @remarks
     *
     */
    amount?: string;
    /**
     * The date and time when the record was created, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    createdOn?: Date;
    /**
     * The type of currency used.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * The linked transaction ID for billing transactions. This field is used for all rules except for the custom unlimited or manual recognition rule models. If using the custom unlimited rule model, then the field value must be null. If the field is not null, then the referenceId field must be null.
     *
     * @remarks
     *
     */
    linkedTransactionId?: string;
    /**
     * The number for the linked invoice item or invoice item adjustment transaction. This field is used for all rules except for the custom unlimited or manual recognition rule models. If using the custom unlimited or manual recognition rule models, then the field value is null.
     *
     * @remarks
     *
     */
    linkedTransactionNumber?: string;
    /**
     * The type of linked transaction for billing transactions, which can be invoice item or invoice item adjustment. This field is used for all rules except for the custom unlimited or manual recognition rule models.
     *
     * @remarks
     *
     */
    linkedTransactionType?: string;
    /**
     * Additional information about this record.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The name of the recognition rule.
     *
     * @remarks
     *
     */
    recognitionRuleName?: string;
    /**
     * The revenue that was distributed in a closed accounting period.
     *
     * @remarks
     *
     */
    recognizedRevenue?: string;
    /**
     * Reference ID is used only in the custom unlimited rule to create a revenue schedule. In this scenario, the revenue schedule is not linked to an invoice item or invoice item adjustment.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * Revenue items are listed in ascending order by the accounting period start date.
     *
     * @remarks
     *
     */
    revenueItems?: GETRsRevenueItemType[];
    /**
     * The effective date of the revenue schedule. For example, the revenue schedule date for bookings-based revenue recognition is typically set to the order date or contract date.
     *
     * @remarks
     *
     * The date cannot be in a closed accounting period. The date must be in the `yyyy-mm-dd` format.
     *
     */
    revenueScheduleDate?: Date;
    /**
     * The original subscription charge ID.
     *
     * @remarks
     *
     */
    subscriptionChargeId?: string;
    /**
     * The original subscription ID.
     *
     * @remarks
     *
     */
    subscriptionId?: string;
    /**
     * Revenue in the open-ended accounting period.
     *
     * @remarks
     *
     */
    undistributedUnrecognizedRevenue?: string;
    /**
     * Revenue distributed in all open accounting periods, which includes the open-ended accounting period.
     *
     * @remarks
     *
     */
    unrecognizedRevenue?: string;
    /**
     * The date when the revenue automation start date was set, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    updatedOn?: Date;
}
