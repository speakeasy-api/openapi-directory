import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExecuteSwitchTrasactionSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Mode of the instruction. If investment_product_id is `cash` mode can only be set to `value` or `percentage`
 */
export declare enum ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum {
    Percentage = "percentage",
    Unit = "unit",
    Value = "value"
}
/**
 * Each individual buy side and sell side instruction of the Switch request
 */
export declare class ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest extends SpeakeasyBase {
    /**
     * Identifier of the investment product sold or bought. If the instruction is to use a cash holding (relevant only for sell instruction) this must be `cash`
     */
    investmentProductId: string;
    /**
     * Mode of the instruction. If investment_product_id is `cash` mode can only be set to `value` or `percentage`
     */
    mode: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;
    /**
     * value according to the mode. e.g. mode `percentage` and value `10` implies 10%
     */
    value: string;
}
/**
 * Definition of Switch instruction
 */
export declare class ExecuteSwitchTrasactionSwitchInstructionRequest extends SpeakeasyBase {
    buyInstructions: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[];
    /**
     * Identifier of the pot the instruction is sent to
     */
    potId: string;
    /**
     * Unique request id to ensure idempotency. (eg: UUID)
     */
    requestId: string;
    sellInstructions: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[];
}
export declare class ExecuteSwitchTrasactionRequest extends SpeakeasyBase {
    requestBody?: ExecuteSwitchTrasactionSwitchInstructionRequest;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class ExecuteSwitchTrasaction500ApplicationJSON extends SpeakeasyBase {
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
export declare class ExecuteSwitchTrasaction429ApplicationJSON extends SpeakeasyBase {
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
export declare enum ExecuteSwitchTrasaction409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class ExecuteSwitchTrasaction409ApplicationJSON extends SpeakeasyBase {
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
    status: ExecuteSwitchTrasaction409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class ExecuteSwitchTrasaction404ApplicationJSON extends SpeakeasyBase {
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
export declare class ExecuteSwitchTrasaction403ApplicationJSON extends SpeakeasyBase {
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
export declare class ExecuteSwitchTrasaction401ApplicationJSON extends SpeakeasyBase {
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
export declare class ExecuteSwitchTrasaction400ApplicationJSON extends SpeakeasyBase {
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
 * Mode of the instruction. If investment_product_id is `cash` mode can only be set to `value` or `percentage`
 */
export declare enum ExecuteSwitchTrasaction200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequestModeEnum {
    Percentage = "percentage",
    Unit = "unit",
    Value = "value"
}
/**
 * Each individual buy side and sell side instruction of the Switch request
 */
export declare class ExecuteSwitchTrasaction200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequest extends SpeakeasyBase {
    /**
     * Identifier of the investment product sold or bought. If the instruction is to use a cash holding (relevant only for sell instruction) this must be `cash`
     */
    investmentProductId: string;
    /**
     * Mode of the instruction. If investment_product_id is `cash` mode can only be set to `value` or `percentage`
     */
    mode: ExecuteSwitchTrasaction200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;
    /**
     * value according to the mode. e.g. mode `percentage` and value `10` implies 10%
     */
    value: string;
}
/**
 * Describe the origin from where the switch transaction is triggered
 */
export declare enum ExecuteSwitchTrasaction200ApplicationJSONOriginEnum {
    Api = "api",
    Rebalance = "rebalance"
}
/**
 * Status of the Switch instruction
 */
export declare enum ExecuteSwitchTrasaction200ApplicationJSONStatusEnum {
    Initiated = "initiated",
    SellInProgress = "sell_in_progress",
    BuyInProgress = "buy_in_progress",
    Completed = "completed"
}
/**
 * success
 */
export declare class ExecuteSwitchTrasaction200ApplicationJSON extends SpeakeasyBase {
    buyInstructions: ExecuteSwitchTrasaction200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequest[];
    /**
     * Describe the origin from where the switch transaction is triggered
     */
    origin: ExecuteSwitchTrasaction200ApplicationJSONOriginEnum;
    /**
     * Identifier of the pot the instruction is sent to
     */
    potId: string;
    sellInstructions: ExecuteSwitchTrasaction200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequest[];
    /**
     * Status of the Switch instruction
     */
    status: ExecuteSwitchTrasaction200ApplicationJSONStatusEnum;
    /**
     * Unique identifier of the switch instruction
     */
    switchTransactionId: string;
}
export declare class ExecuteSwitchTrasactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    executeSwitchTrasaction200ApplicationJSONObject?: ExecuteSwitchTrasaction200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    executeSwitchTrasaction400ApplicationJSONObject?: ExecuteSwitchTrasaction400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    executeSwitchTrasaction401ApplicationJSONObject?: ExecuteSwitchTrasaction401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    executeSwitchTrasaction403ApplicationJSONObject?: ExecuteSwitchTrasaction403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    executeSwitchTrasaction404ApplicationJSONObject?: ExecuteSwitchTrasaction404ApplicationJSON;
    /**
     * Duplicate request
     */
    executeSwitchTrasaction409ApplicationJSONObject?: ExecuteSwitchTrasaction409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    executeSwitchTrasaction429ApplicationJSONObject?: ExecuteSwitchTrasaction429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    executeSwitchTrasaction500ApplicationJSONObject?: ExecuteSwitchTrasaction500ApplicationJSON;
}
