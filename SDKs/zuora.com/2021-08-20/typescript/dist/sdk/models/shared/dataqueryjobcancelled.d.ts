import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DataQueryJobCancelledQueryStatusEnum {
    Cancelled = "cancelled"
}
/**
 * A cancelled data query job.
 *
**/
export declare class DataQueryJobCancelled extends SpeakeasyBase {
    createdBy?: string;
    id?: string;
    query?: string;
    queryStatus?: DataQueryJobCancelledQueryStatusEnum;
    remainingRetries?: number;
    updatedOn?: Date;
}
