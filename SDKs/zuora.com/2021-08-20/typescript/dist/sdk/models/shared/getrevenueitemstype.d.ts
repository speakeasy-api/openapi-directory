import { SpeakeasyBase } from "../../../internal/utils";
import { GETRevenueItemType } from "./getrevenueitemtype";
export declare class GETRevenueItemsType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Revenue items are listed in ascending order by the accounting period start date.
     *
     * @remarks
     *
     */
    revenueItems?: GETRevenueItemType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
