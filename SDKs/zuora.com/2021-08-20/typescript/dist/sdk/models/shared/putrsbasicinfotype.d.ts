import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Revenue Schedule object.
 *
 * @remarks
 *
 */
export declare class PUTRSBasicInfoType extends SpeakeasyBase {
    /**
     * Additional information about this record.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * Reference ID is used only in the custom unlimited rule to create a revenue schedule. In this scenario, the revenue schedule is not linked to an invoice item or invoice item adjustment.
     *
     * @remarks
     *
     * Use this field only when the revenue schedule is not linked to an invoice item or invoice item adjustment, such as for revenue schedules based on the Custom - Unlimited recognition model.
     *
     */
    referenceId?: string;
}
