import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETRevenueStartDateSettingType extends SpeakeasyBase {
    /**
     * The date on which revenue automation starts. This is the first day of an accounting period.
     *
     * @remarks
     *
     */
    startDate?: Date;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * The user who made the change.
     *
     * @remarks
     *
     */
    updatedBy?: string;
    /**
     * The date when the revenue automation start date was set.
     *
     * @remarks
     *
     */
    updatedOn?: Date;
}
