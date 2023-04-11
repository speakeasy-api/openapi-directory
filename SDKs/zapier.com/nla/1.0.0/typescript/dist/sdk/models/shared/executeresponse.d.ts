import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the execution.
 */
export declare enum ExecuteResponseStatusEnum {
    Success = "success",
    Error = "error",
    Empty = "empty",
    Preview = "preview"
}
/**
 * This is a summary of the results given the action that was executed.
 */
export declare class ExecuteResponse extends SpeakeasyBase {
    /**
     * The name of the action that was executed.
     */
    actionUsed: string;
    /**
     * The error message if the execution failed.
     */
    error?: string;
    /**
     * The id of the execution log.
     */
    id: string;
    /**
     * The params we used / will use to execute the action.
     */
    inputParams: Record<string, any>;
    /**
     * A trimmed down result of the first item of the full results. Ideal for humans and language models!
     */
    result?: Record<string, any>;
    /**
     * The URL to run the action or review the AI choices the AI made for input_params given instructions.
     */
    reviewUrl: string;
    /**
     * The status of the execution.
     */
    status?: ExecuteResponseStatusEnum;
}
