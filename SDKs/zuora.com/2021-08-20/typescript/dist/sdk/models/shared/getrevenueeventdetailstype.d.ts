import { SpeakeasyBase } from "../../../internal/utils";
import { GETRevenueEventDetailWithoutSuccessType } from "./getrevenueeventdetailwithoutsuccesstype";
export declare class GETRevenueEventDetailsType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Represents a change to a revenue schedule, such as posting an invoice or distributing revenue.
     *
     * @remarks
     *
     */
    revenueEventDetails?: GETRevenueEventDetailWithoutSuccessType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
