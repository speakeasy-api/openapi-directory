import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WorkflowInstanceStatusEnum {
    Queued = "Queued",
    Processing = "Processing"
}
/**
 * A instance workflow object.
**/
export declare class WorkflowInstance extends SpeakeasyBase {
    createdAt?: string;
    id?: number;
    name?: string;
    originalWorkflowId?: number;
    status?: WorkflowInstanceStatusEnum;
    updatedAt?: string;
}
