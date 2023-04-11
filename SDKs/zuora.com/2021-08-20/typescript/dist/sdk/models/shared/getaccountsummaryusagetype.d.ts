import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETAccountSummaryUsageType extends SpeakeasyBase {
    /**
     * Number of units used.
     *
     * @remarks
     *
     */
    quantity?: string;
    /**
     * The start date of a usage period as `yyyy-mm`. Zuora uses this field value to determine the usage date.
     *
     * @remarks
     *
     */
    startDate?: Date;
    /**
     * Unit by which consumption is measured, as configured in the Billing Settings section of the web-based UI.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
