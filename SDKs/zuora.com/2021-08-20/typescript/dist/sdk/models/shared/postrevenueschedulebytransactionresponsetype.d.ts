import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTRevenueScheduleByTransactionResponseType extends SpeakeasyBase {
    /**
     * Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".
     *
     * @remarks
     *
     */
    revenueScheduleNumber?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
