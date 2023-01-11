import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetWorkflowResponseStatusEnum {
    Queued = "Queued",
    Processing = "Processing",
    Stopping = "Stopping",
    Stopped = "Stopped",
    Finished = "Finished"
}
/**
 * An object containing task counts.
 *
**/
export declare class GetWorkflowResponseTasks extends SpeakeasyBase {
    error?: number;
    pending?: number;
    processing?: number;
    queued?: number;
    stopped?: number;
    success?: number;
    total?: number;
}
export declare class GetWorkflowResponse extends SpeakeasyBase {
    cpuTime?: string;
    createdAt?: string;
    finishedAt?: string;
    id?: number;
    messages?: Record<string, any>;
    name?: string;
    originalWorkflowId?: string;
    runTime?: number;
    status?: GetWorkflowResponseStatusEnum;
    tasks?: GetWorkflowResponseTasks;
    type?: string;
    updatedAt?: string;
}
