import { SpeakeasyBase } from "../../../internal/utils";
import { GETAccountingPeriodWithoutSuccessType } from "./getaccountingperiodwithoutsuccesstype";
export declare class GETAccountingPeriodsType extends SpeakeasyBase {
    /**
     * An array of all accounting periods on your tenant. The accounting periods are returned in ascending order of start date; that is, the latest period is returned first.
     *
     * @remarks
     *
     */
    accountingPeriods?: GETAccountingPeriodWithoutSuccessType[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
