import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSwitchSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetSwitchRequest extends SpeakeasyBase {
    /**
     * If set to `true` details of individual buy and sell (child) transactions will be included
     */
    includeDetails?: boolean;
    /**
     * Unique identifier of the switch instruction
     */
    switchTransactionId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetSwitch500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetSwitch429ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetSwitch409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class GetSwitch409ApplicationJSON extends SpeakeasyBase {
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
    status: GetSwitch409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class GetSwitch404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetSwitch403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetSwitch401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetSwitch400ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetSwitch200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequestModeEnum {
    Percentage = "percentage",
    Unit = "unit",
    Value = "value"
}
/**
 * Each individual buy side and sell side instruction of the Switch request
 */
export declare class GetSwitch200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequest extends SpeakeasyBase {
    /**
     * Identifier of the investment product sold or bought. If the instruction is to use a cash holding (relevant only for sell instruction) this must be `cash`
     */
    investmentProductId: string;
    /**
     * Mode of the instruction. If investment_product_id is `cash` mode can only be set to `value` or `percentage`
     */
    mode: GetSwitch200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;
    /**
     * value according to the mode. e.g. mode `percentage` and value `10` implies 10%
     */
    value: string;
}
/**
 * Describe the origin from where the switch transaction is triggered
 */
export declare enum GetSwitch200ApplicationJSONOriginEnum {
    Api = "api",
    Rebalance = "rebalance"
}
/**
 * Status of the Switch instruction
 */
export declare enum GetSwitch200ApplicationJSONStatusEnum {
    Initiated = "initiated",
    SellInProgress = "sell_in_progress",
    BuyInProgress = "buy_in_progress",
    Completed = "completed",
    Failed = "failed"
}
/**
 * Side of the transaction
 */
export declare enum GetSwitch200ApplicationJSONTransactionsSideEnum {
    Buy = "buy",
    Sell = "sell"
}
export declare enum GetSwitch200ApplicationJSONTransactionsStatusEnum {
    Instructed = "instructed",
    Priced = "priced",
    Settled = "settled",
    Rejected = "rejected"
}
export declare class GetSwitch200ApplicationJSONTransactions extends SpeakeasyBase {
    /**
     * Date and time of transaction creation
     */
    createdAt: Date;
    /**
     * Identifier of investment product that is bought or sold.
     */
    investmentProductId: string;
    /**
     * Executed price of the transaction
     */
    price?: string;
    /**
     * quantity (in units)
     */
    quantity?: string;
    /**
     * Side of the transaction
     */
    side: GetSwitch200ApplicationJSONTransactionsSideEnum;
    status: GetSwitch200ApplicationJSONTransactionsStatusEnum;
    /**
     * Unique identifier of the transaction
     */
    transactionId: string;
    /**
     * Monetary value of the transaction
     */
    value?: string;
}
/**
 * success
 */
export declare class GetSwitch200ApplicationJSON extends SpeakeasyBase {
    buyInstructions: GetSwitch200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequest[];
    /**
     * Will indicate the date where this record was created
     */
    createdAt?: string;
    /**
     * Describe the origin from where the switch transaction is triggered
     */
    origin: GetSwitch200ApplicationJSONOriginEnum;
    /**
     * Identifier of the pot the instruction is sent to
     */
    potId: string;
    /**
     * Failure reason (shown only for switch transactions in `failed` state)
     */
    reason?: string;
    sellInstructions: GetSwitch200ApplicationJSONEachBuyOrSellInstructionOfTheSwitchRequest[];
    /**
     * Status of the Switch instruction
     */
    status: GetSwitch200ApplicationJSONStatusEnum;
    /**
     * Unique identifier of the switch instruction
     */
    switchTransactionId: string;
    /**
     * Array with status of all buy and sell transactions. Will be sent only if `include_details` = true.
     */
    transactions?: GetSwitch200ApplicationJSONTransactions[];
}
export declare class GetSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getSwitch200ApplicationJSONObject?: GetSwitch200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getSwitch400ApplicationJSONObject?: GetSwitch400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getSwitch401ApplicationJSONObject?: GetSwitch401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getSwitch403ApplicationJSONObject?: GetSwitch403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getSwitch404ApplicationJSONObject?: GetSwitch404ApplicationJSON;
    /**
     * Duplicate request
     */
    getSwitch409ApplicationJSONObject?: GetSwitch409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getSwitch429ApplicationJSONObject?: GetSwitch429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getSwitch500ApplicationJSONObject?: GetSwitch500ApplicationJSON;
}
