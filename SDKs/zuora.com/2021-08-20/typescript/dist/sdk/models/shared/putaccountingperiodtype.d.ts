import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of an Accounting Period object.
 *
 * @remarks
 *
 */
export declare class PUTAccountingPeriodType extends SpeakeasyBase {
    /**
     * The end date of the accounting period in yyyy-mm-dd format, for example, "2016-02-19".
     *
     * @remarks
     *
     */
    endDate?: Date;
    /**
     * Fiscal year of the accounting period in yyyy format, for example, "2016".
     *
     * @remarks
     *
     */
    fiscalYear?: string;
    fiscalQuarter?: number;
    /**
     * Name of the accounting period.
     *
     * @remarks
     *
     * Accounting period name must be unique. Maximum of 100 characters.
     *
     */
    name?: string;
    /**
     * Notes about the accounting period.
     *
     * @remarks
     *
     * Maximum of 255 characters.
     *
     */
    notes?: string;
    /**
     * The start date of the accounting period in yyyy-mm-dd format, for example, "2016-02-19".
     *
     * @remarks
     *
     */
    startDate?: Date;
}
