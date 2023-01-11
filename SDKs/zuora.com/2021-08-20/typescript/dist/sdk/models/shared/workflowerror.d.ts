import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WorkflowErrorCodeEnum {
    Invalid = "invalid"
}
export declare class WorkflowError extends SpeakeasyBase {
    code?: WorkflowErrorCodeEnum;
    status?: number;
    title?: string;
}
