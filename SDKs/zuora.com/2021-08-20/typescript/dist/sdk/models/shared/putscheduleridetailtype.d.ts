import { SpeakeasyBase } from "../../../internal/utils";
import { RevenueScheduleItemType } from "./revenuescheduleitemtype";
export declare class PUTScheduleRIDetailType extends SpeakeasyBase {
    /**
     * Revenue items are listed in ascending order by the accounting period start date.
     *
     * @remarks
     *
     * Include at least one custom field.
     *
     */
    revenueItems: RevenueScheduleItemType[];
}
