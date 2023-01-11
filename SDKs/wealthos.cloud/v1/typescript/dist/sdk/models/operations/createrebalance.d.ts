import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRebalanceHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare enum CreateRebalanceSwitchInstructionRequestTypeEnum {
    Pot = "pot",
    Investor = "investor",
    Portfolio = "portfolio"
}
/**
 * Definition of Switch instruction
**/
export declare class CreateRebalanceSwitchInstructionRequest extends SpeakeasyBase {
    requestId: string;
    type: CreateRebalanceSwitchInstructionRequestTypeEnum;
    values: string[];
}
export declare class CreateRebalanceSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CreateRebalanceRequest extends SpeakeasyBase {
    headers: CreateRebalanceHeaders;
    request?: CreateRebalanceSwitchInstructionRequest;
    security: CreateRebalanceSecurity;
}
export declare class CreateRebalanceResponse extends SpeakeasyBase {
    contentType: string;
    createRebalance201ApplicationJSONAny?: any;
    createRebalance400ApplicationJSONAny?: any;
    createRebalance401ApplicationJSONAny?: any;
    createRebalance403ApplicationJSONAny?: any;
    createRebalance404ApplicationJSONAny?: any;
    createRebalance409ApplicationJSONAny?: any;
    createRebalance429ApplicationJSONAny?: any;
    createRebalance500ApplicationJSONAny?: any;
    statusCode: number;
}
