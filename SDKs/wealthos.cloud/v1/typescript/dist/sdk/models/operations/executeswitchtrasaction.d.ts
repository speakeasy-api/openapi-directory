import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecuteSwitchTrasactionHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare enum ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum {
    Percentage = "percentage",
    Unit = "unit",
    Value = "value"
}
/**
 * Each individual buy side and sell side instruction of the Switch request
**/
export declare class ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest extends SpeakeasyBase {
    investmentProductId: string;
    mode: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;
    value: string;
}
/**
 * Definition of Switch instruction
**/
export declare class ExecuteSwitchTrasactionSwitchInstructionRequest extends SpeakeasyBase {
    buyInstructions: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[];
    potId: string;
    requestId: string;
    sellInstructions: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[];
}
export declare class ExecuteSwitchTrasactionSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class ExecuteSwitchTrasactionRequest extends SpeakeasyBase {
    headers: ExecuteSwitchTrasactionHeaders;
    request?: ExecuteSwitchTrasactionSwitchInstructionRequest;
    security: ExecuteSwitchTrasactionSecurity;
}
export declare class ExecuteSwitchTrasactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    executeSwitchTrasaction200ApplicationJSONAny?: any;
    executeSwitchTrasaction400ApplicationJSONAny?: any;
    executeSwitchTrasaction401ApplicationJSONAny?: any;
    executeSwitchTrasaction403ApplicationJSONAny?: any;
    executeSwitchTrasaction404ApplicationJSONAny?: any;
    executeSwitchTrasaction409ApplicationJSONAny?: any;
    executeSwitchTrasaction429ApplicationJSONAny?: any;
    executeSwitchTrasaction500ApplicationJSONAny?: any;
}
