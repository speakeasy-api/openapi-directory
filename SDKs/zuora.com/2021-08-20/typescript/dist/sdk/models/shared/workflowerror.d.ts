import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A short error code describing the error
 */
export declare enum WorkflowErrorCodeEnum {
    Invalid = "invalid"
}
export declare class WorkflowError extends SpeakeasyBase {
    /**
     * A short error code describing the error
     */
    code?: WorkflowErrorCodeEnum;
    /**
     * The http status code for this error
     */
    status?: number;
    /**
     * A human readable description describing the error
     */
    title?: string;
}
