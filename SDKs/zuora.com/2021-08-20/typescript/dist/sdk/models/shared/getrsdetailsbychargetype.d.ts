import { SpeakeasyBase } from "../../../internal/utils";
import { GETRSDetailWithoutSuccessType } from "./getrsdetailwithoutsuccesstype";
export declare class GETRSDetailsByChargeType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Represents how revenue will be recognized over time.
     *
     * @remarks
     *
     * This contains the details of a revenue schedule. If you do not specify the `pageSize` variable, the default number of revenue schedules returned per invocation is 8, and if there are more than 8 revenue schedules to be returned, the `nextPage` field will provide a hyperlink to view the next page(s) of revenue events. The order of revenue schedules is descending by the `updatedOn` field.
     *
     */
    revenueSchedules?: GETRSDetailWithoutSuccessType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
