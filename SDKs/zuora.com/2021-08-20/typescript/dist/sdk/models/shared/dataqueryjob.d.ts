import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DataQueryJobQueryStatusEnum {
    Submitted = "submitted",
    Accepted = "accepted",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed",
    Cancelled = "cancelled"
}
/**
 * A data query job.
 *
**/
export declare class DataQueryJob extends SpeakeasyBase {
    createdBy?: string;
    dataFile?: string;
    id?: string;
    outputRows?: number;
    processingTime?: number;
    query?: string;
    queryStatus?: DataQueryJobQueryStatusEnum;
    remainingRetries?: number;
    updatedOn?: Date;
}
