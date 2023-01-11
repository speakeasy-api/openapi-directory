import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EvaluateRebalanceHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare enum EvaluateRebalanceSwitchInstructionRequestTypeEnum {
    Pot = "pot",
    Investor = "investor",
    Portfolio = "portfolio"
}
/**
 * Definition of Switch instruction
**/
export declare class EvaluateRebalanceSwitchInstructionRequest extends SpeakeasyBase {
    requestId: string;
    type: EvaluateRebalanceSwitchInstructionRequestTypeEnum;
    values: string[];
}
export declare class EvaluateRebalanceSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare enum EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum {
    Eligible = "eligible",
    Ineligible = "ineligible",
    NoPortfolioAttached = "no_portfolio_attached",
    NegativeHoldings = "negative_holdings",
    NoHoldings = "no_holdings"
}
/**
 * Each individual pot details on the rebalance request
**/
export declare class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest extends SpeakeasyBase {
    investorId: string;
    portfolioDeviation?: string;
    portfolioTemplateId?: string;
    potId: string;
    rebalanceEligibilityStatus: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum;
}
/**
 * contains array for pot details
**/
export declare class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot extends SpeakeasyBase {
    evaluationResponse: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest[];
}
export declare class EvaluateRebalanceRequest extends SpeakeasyBase {
    headers: EvaluateRebalanceHeaders;
    request?: EvaluateRebalanceSwitchInstructionRequest;
    security: EvaluateRebalanceSecurity;
}
export declare class EvaluateRebalanceResponse extends SpeakeasyBase {
    contentType: string;
    evaluateRebalance400ApplicationJSONAny?: any;
    evaluateRebalance401ApplicationJSONAny?: any;
    evaluateRebalance403ApplicationJSONAny?: any;
    evaluateRebalance404ApplicationJSONAny?: any;
    evaluateRebalance409ApplicationJSONAny?: any;
    evaluateRebalance429ApplicationJSONAny?: any;
    evaluateRebalance500ApplicationJSONAny?: any;
    statusCode: number;
    thisIsTheReturnObjectWithEvaluationPerPot?: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot;
}
