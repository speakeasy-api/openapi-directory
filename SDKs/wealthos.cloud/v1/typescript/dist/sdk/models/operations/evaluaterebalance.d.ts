import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EvaluateRebalanceSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Rebalance request triggering type. This describe the types of elements included in the values field
 */
export declare enum EvaluateRebalanceSwitchInstructionRequestTypeEnum {
    Pot = "pot",
    Investor = "investor",
    Portfolio = "portfolio"
}
/**
 * Definition of Switch instruction
 */
export declare class EvaluateRebalanceSwitchInstructionRequest extends SpeakeasyBase {
    /**
     * Unique request id to ensure idempotency. (eg: UUID)
     */
    requestId: string;
    /**
     * Rebalance request triggering type. This describe the types of elements included in the values field
     */
    type: EvaluateRebalanceSwitchInstructionRequestTypeEnum;
    /**
     * List of unique Ids from the mentioned type to trigger the rebalance process
     */
    values: string[];
}
export declare class EvaluateRebalanceRequest extends SpeakeasyBase {
    requestBody?: EvaluateRebalanceSwitchInstructionRequest;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class EvaluateRebalance500ApplicationJSON extends SpeakeasyBase {
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
export declare class EvaluateRebalance429ApplicationJSON extends SpeakeasyBase {
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
export declare enum EvaluateRebalance409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class EvaluateRebalance409ApplicationJSON extends SpeakeasyBase {
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
    status: EvaluateRebalance409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class EvaluateRebalance404ApplicationJSON extends SpeakeasyBase {
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
export declare class EvaluateRebalance403ApplicationJSON extends SpeakeasyBase {
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
export declare class EvaluateRebalance401ApplicationJSON extends SpeakeasyBase {
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
export declare class EvaluateRebalance400ApplicationJSON extends SpeakeasyBase {
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
 * Status of whether a pot is capable of rebalance or not
 */
export declare enum EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum {
    Eligible = "eligible",
    Ineligible = "ineligible",
    NoPortfolioAttached = "no_portfolio_attached",
    NegativeHoldings = "negative_holdings",
    NoHoldings = "no_holdings"
}
/**
 * Each individual pot details on the rebalance request
 */
export declare class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest extends SpeakeasyBase {
    /**
     * Unique ID of the Investors attached to the pot
     */
    investorId: string;
    /**
     * Portfolio deviation for the pot
     */
    portfolioDeviation?: string;
    /**
     * Unique ID of the portfolio attached to the pot
     */
    portfolioTemplateId?: string;
    /**
     * Identifier of pot evaluated for rebalance
     */
    potId: string;
    /**
     * Status of whether a pot is capable of rebalance or not
     */
    rebalanceEligibilityStatus: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum;
}
/**
 * contains array for pot details
 */
export declare class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot extends SpeakeasyBase {
    evaluationResponse: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest[];
}
export declare class EvaluateRebalanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    evaluateRebalance400ApplicationJSONObject?: EvaluateRebalance400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    evaluateRebalance401ApplicationJSONObject?: EvaluateRebalance401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    evaluateRebalance403ApplicationJSONObject?: EvaluateRebalance403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    evaluateRebalance404ApplicationJSONObject?: EvaluateRebalance404ApplicationJSON;
    /**
     * Duplicate request
     */
    evaluateRebalance409ApplicationJSONObject?: EvaluateRebalance409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    evaluateRebalance429ApplicationJSONObject?: EvaluateRebalance429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    evaluateRebalance500ApplicationJSONObject?: EvaluateRebalance500ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    thisIsTheReturnObjectWithEvaluationPerPot?: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot;
}
