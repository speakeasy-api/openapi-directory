import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateTaskStatusEnum {
    Queued = "Queued",
    Processing = "Processing",
    Pending = "Pending",
    Success = "Success",
    Stopped = "Stopped",
    Error = "Error"
}
/**
 * A task.
 *
**/
export declare class UpdateTask extends SpeakeasyBase {
    actionType?: string;
    callType?: string;
    concurrentLimit?: number;
    id: number;
    name?: string;
    object?: string;
    objectId?: string;
    status?: UpdateTaskStatusEnum;
    tags?: string[];
    workflowId?: number;
}
