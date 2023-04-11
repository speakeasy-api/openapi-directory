import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateRebalanceSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Rebalance request triggering type. This describe the types of elements included in the values field
 */
export declare enum CreateRebalanceSwitchInstructionRequestTypeEnum {
    Pot = "pot",
    Investor = "investor",
    Portfolio = "portfolio"
}
/**
 * Definition of Switch instruction
 */
export declare class CreateRebalanceSwitchInstructionRequest extends SpeakeasyBase {
    /**
     * Unique request id to ensure idempotency. (eg: UUID)
     */
    requestId: string;
    /**
     * Rebalance request triggering type. This describe the types of elements included in the values field
     */
    type: CreateRebalanceSwitchInstructionRequestTypeEnum;
    /**
     * List of unique Ids from the mentioned type to trigger the rebalance process
     */
    values: string[];
}
export declare class CreateRebalanceRequest extends SpeakeasyBase {
    requestBody?: CreateRebalanceSwitchInstructionRequest;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CreateRebalance500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class CreateRebalance429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Current status of the original request
 */
export declare enum CreateRebalance409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class CreateRebalance409ApplicationJSON extends SpeakeasyBase {
    /**
     * Human readable description of the error
     */
    message: string;
    /**
     * Stringified original response body if status is `COMPLETE`
     */
    response?: Record<string, any>;
    /**
     * Current status of the original request
     */
    status: CreateRebalance409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class CreateRebalance404ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class CreateRebalance403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class CreateRebalance401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class CreateRebalance400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Current status of the rebalance on the specific pot_id
 */
export declare enum CreateRebalance201ApplicationJSONEachPotInstructionOfTheRebalanceRequestStatusEnum {
    Processing = "processing",
    Failed = "failed",
    Completed = "completed"
}
/**
 * Each individual pot details on the rebalance request
 */
export declare class CreateRebalance201ApplicationJSONEachPotInstructionOfTheRebalanceRequest extends SpeakeasyBase {
    /**
     * portfolio deviation for the pot
     */
    portfolioDeviation: string;
    /**
     * portfolio_template_id in used by the relevent pot
     */
    portfolioTemplateId: string;
    /**
     * Identifier of pot triggered for rebalance
     */
    potId: string;
    /**
     * if the status is rejected then the reason for it.
     */
    reason: string;
    /**
     * Current status of the rebalance on the specific pot_id
     */
    status: CreateRebalance201ApplicationJSONEachPotInstructionOfTheRebalanceRequestStatusEnum;
}
/**
 * Status of the Rebalance instruction
 */
export declare enum CreateRebalance201ApplicationJSONStatusEnum {
    Processing = "processing",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed"
}
/**
 * success
 */
export declare class CreateRebalance201ApplicationJSON extends SpeakeasyBase {
    potDetails: CreateRebalance201ApplicationJSONEachPotInstructionOfTheRebalanceRequest[];
    /**
     * Unique identifier of the rebalance instruction
     */
    rebalanceRequestId: string;
    /**
     * Status of the Rebalance instruction
     */
    status: CreateRebalance201ApplicationJSONStatusEnum;
}
export declare class CreateRebalanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    createRebalance201ApplicationJSONObject?: CreateRebalance201ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    createRebalance400ApplicationJSONObject?: CreateRebalance400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    createRebalance401ApplicationJSONObject?: CreateRebalance401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    createRebalance403ApplicationJSONObject?: CreateRebalance403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    createRebalance404ApplicationJSONObject?: CreateRebalance404ApplicationJSON;
    /**
     * Duplicate request
     */
    createRebalance409ApplicationJSONObject?: CreateRebalance409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    createRebalance429ApplicationJSONObject?: CreateRebalance429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    createRebalance500ApplicationJSONObject?: CreateRebalance500ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
