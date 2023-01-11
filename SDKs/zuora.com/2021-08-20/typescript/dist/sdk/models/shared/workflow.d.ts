import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WorkflowTypeEnum {
    WorkflowSetup = "Workflow::Setup",
    WorkflowInstance = "Workflow::Instance"
}
/**
 * A workflow.
 *
**/
export declare class Workflow extends SpeakeasyBase {
    calloutTrigger?: boolean;
    createdAt?: string;
    description?: string;
    id?: number;
    interval?: string;
    name?: string;
    ondemandTrigger?: boolean;
    scheduledTrigger?: boolean;
    timezone?: string;
    type?: WorkflowTypeEnum;
    updatedAt?: string;
}
