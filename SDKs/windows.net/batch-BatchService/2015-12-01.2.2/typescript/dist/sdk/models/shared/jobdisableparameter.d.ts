import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sets what to do with active tasks associated with the job.
 */
export declare enum JobDisableParameterDisableTasksEnum {
    Requeue = "requeue",
    Terminate = "terminate",
    Wait = "wait"
}
/**
 * Parameters for a CloudJobOperations.Disable request.
 */
export declare class JobDisableParameter extends SpeakeasyBase {
    /**
     * Sets what to do with active tasks associated with the job.
     */
    disableTasks: JobDisableParameterDisableTasksEnum;
}
