import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecuteBuyTrasactionHeaders extends SpeakeasyBase {
    xApiKey: string;
}
/**
 * Definition of an single instruction(buy|sell)
**/
export declare class ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell extends SpeakeasyBase {
    clientOrderId?: string;
    investmentProductId: string;
    quantity?: string;
    value?: string;
}
/**
 * Definition of an buy transaction request
**/
export declare class ExecuteBuyTrasactionBuyTransactionRequest extends SpeakeasyBase {
    investmentInstructions: ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell[];
    potId: string;
    requestId: string;
}
export declare class ExecuteBuyTrasactionSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class ExecuteBuyTrasactionRequest extends SpeakeasyBase {
    headers: ExecuteBuyTrasactionHeaders;
    request?: ExecuteBuyTrasactionBuyTransactionRequest;
    security: ExecuteBuyTrasactionSecurity;
}
export declare class ExecuteBuyTrasactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    executeBuyTrasaction200ApplicationJSONAny?: any;
    executeBuyTrasaction400ApplicationJSONAny?: any;
    executeBuyTrasaction401ApplicationJSONAny?: any;
    executeBuyTrasaction403ApplicationJSONAny?: any;
    executeBuyTrasaction404ApplicationJSONAny?: any;
    executeBuyTrasaction409ApplicationJSONAny?: any;
    executeBuyTrasaction429ApplicationJSONAny?: any;
    executeBuyTrasaction500ApplicationJSONAny?: any;
}
