import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRebalanceDetailsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetRebalanceDetailsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the rebalance request
     */
    rebalanceRequestId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetRebalanceDetails500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetRebalanceDetails429ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetRebalanceDetails409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class GetRebalanceDetails409ApplicationJSON extends SpeakeasyBase {
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
    status: GetRebalanceDetails409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class GetRebalanceDetails404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetRebalanceDetails403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetRebalanceDetails401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetRebalanceDetails400ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum {
    Percentage = "percentage",
    Unit = "unit",
    Value = "value"
}
/**
 * Each individual buy side and sell side instruction of the Switch request
 */
export declare class GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestEachBuyOrSellInstructionOfTheSwitchRequest extends SpeakeasyBase {
    /**
     * Identifier of the investment product sold or bought. If the instruction is to use a cash holding (relevant only for sell instruction) this must be `cash`
     */
    investmentProductId: string;
    /**
     * Mode of the instruction. If investment_product_id is `cash` mode can only be set to `value` or `percentage`
     */
    mode: GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;
    /**
     * value according to the mode. e.g. mode `percentage` and value `10` implies 10%
     */
    value: string;
}
/**
 * Current status of the rebalance on the specific pot_id
 */
export declare enum GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestStatusEnum {
    Failed = "failed",
    Processing = "processing",
    Initiated = "initiated",
    SellInProgress = "sell_in_progress",
    BuyInProgress = "buy_in_progress",
    Completed = "completed"
}
/**
 * Side of the transaction
 */
export declare enum GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestTransactionsSideEnum {
    Buy = "buy",
    Sell = "sell"
}
export declare enum GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestTransactionsStatusEnum {
    Instructed = "instructed",
    Priced = "priced",
    Settled = "settled",
    Rejected = "rejected"
}
export declare class GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestTransactions extends SpeakeasyBase {
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
    side: GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestTransactionsSideEnum;
    status: GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestTransactionsStatusEnum;
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
 * Each individual pot details on the rebalance request
 */
export declare class GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequest extends SpeakeasyBase {
    buyInstructions: GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestEachBuyOrSellInstructionOfTheSwitchRequest[];
    /**
     * switch instruction ID
     */
    instructionId: string;
    /**
     * Portfolio deviation for the pot
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
    sellInstructions: GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestEachBuyOrSellInstructionOfTheSwitchRequest[];
    /**
     * Current status of the rebalance on the specific pot_id
     */
    status: GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestStatusEnum;
    /**
     * Array with status of all buy and sell transactions.
     */
    transactions: GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequestTransactions[];
}
/**
 * Status of the rebalance instruction
 */
export declare enum GetRebalanceDetails200ApplicationJSONStatusEnum {
    Processing = "processing",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed"
}
/**
 * success
 */
export declare class GetRebalanceDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * Date of the Rebalance created
     */
    createdAt: string;
    /**
     * Details of the each pot related to the rebalance instruction
     */
    potDetails: GetRebalanceDetails200ApplicationJSONEachPotInstructionOfTheRebalanceRequest[];
    /**
     * Unique identifier of the rebalance instruction
     */
    rebalanceRequestId: string;
    /**
     * Status of the rebalance instruction
     */
    status: GetRebalanceDetails200ApplicationJSONStatusEnum;
}
export declare class GetRebalanceDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRebalanceDetails200ApplicationJSONObject?: GetRebalanceDetails200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getRebalanceDetails400ApplicationJSONObject?: GetRebalanceDetails400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getRebalanceDetails401ApplicationJSONObject?: GetRebalanceDetails401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getRebalanceDetails403ApplicationJSONObject?: GetRebalanceDetails403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getRebalanceDetails404ApplicationJSONObject?: GetRebalanceDetails404ApplicationJSON;
    /**
     * Duplicate request
     */
    getRebalanceDetails409ApplicationJSONObject?: GetRebalanceDetails409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getRebalanceDetails429ApplicationJSONObject?: GetRebalanceDetails429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getRebalanceDetails500ApplicationJSONObject?: GetRebalanceDetails500ApplicationJSON;
}
