import { SpeakeasyBase } from "../../../internal/utils";
import { EventRevenueItemType } from "./eventrevenueitemtype";
export declare class PUTEventRIDetailType extends SpeakeasyBase {
    /**
     * Revenue items are listed in ascending order by the accounting period start date.
     *
     * @remarks
     *
     * Include at least one custom field.
     *
     */
    revenueItems: EventRevenueItemType[];
}
