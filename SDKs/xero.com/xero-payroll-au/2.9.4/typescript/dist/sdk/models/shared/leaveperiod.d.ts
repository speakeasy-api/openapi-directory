import { SpeakeasyBase } from "../../../internal/utils";
import { LeavePeriodStatusEnum } from "./leaveperiodstatusenum";
export declare class LeavePeriod extends SpeakeasyBase {
    leavePeriodStatus?: LeavePeriodStatusEnum;
    /**
     * The Number of Units for the leave
     */
    numberOfUnits?: number;
    /**
     * The Pay Period End Date (YYYY-MM-DD)
     */
    payPeriodEndDate?: string;
    /**
     * The Pay Period Start Date (YYYY-MM-DD)
     */
    payPeriodStartDate?: string;
}
