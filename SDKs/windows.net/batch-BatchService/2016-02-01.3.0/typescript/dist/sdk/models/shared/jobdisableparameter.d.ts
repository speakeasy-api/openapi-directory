import { SpeakeasyBase } from "../../../internal/utils";
/**
 * What to do with active tasks associated with the job.
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
     * What to do with active tasks associated with the job.
     */
    disableTasks: JobDisableParameterDisableTasksEnum;
}
