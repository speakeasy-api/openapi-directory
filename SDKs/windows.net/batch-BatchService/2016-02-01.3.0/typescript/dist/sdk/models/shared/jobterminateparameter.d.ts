import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for a CloudJobOperations.Terminate request.
 */
export declare class JobTerminateParameter extends SpeakeasyBase {
    /**
     * The text you want to appear as the job's TerminateReason. The default is 'UserTerminate'.
     */
    terminateReason?: string;
}
