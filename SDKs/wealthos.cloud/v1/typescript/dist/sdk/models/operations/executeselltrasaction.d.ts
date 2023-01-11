import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecuteSellTrasactionHeaders extends SpeakeasyBase {
    xApiKey: string;
}
/**
 * Definition of an single instruction(buy|sell)
**/
export declare class ExecuteSellTrasactionSellTransactionRequestInstructionBuySell extends SpeakeasyBase {
    clientOrderId?: string;
    investmentProductId: string;
    quantity?: string;
    value?: string;
}
/**
 * Definition of an sell transaction request
**/
export declare class ExecuteSellTrasactionSellTransactionRequest extends SpeakeasyBase {
    potId: string;
    requestId: string;
    sellInstructions: ExecuteSellTrasactionSellTransactionRequestInstructionBuySell[];
}
export declare class ExecuteSellTrasactionSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class ExecuteSellTrasactionRequest extends SpeakeasyBase {
    headers: ExecuteSellTrasactionHeaders;
    request?: ExecuteSellTrasactionSellTransactionRequest;
    security: ExecuteSellTrasactionSecurity;
}
export declare class ExecuteSellTrasactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    executeSellTrasaction200ApplicationJSONAny?: any;
    executeSellTrasaction400ApplicationJSONAny?: any;
    executeSellTrasaction401ApplicationJSONAny?: any;
    executeSellTrasaction403ApplicationJSONAny?: any;
    executeSellTrasaction404ApplicationJSONAny?: any;
    executeSellTrasaction409ApplicationJSONAny?: any;
    executeSellTrasaction429ApplicationJSONAny?: any;
    executeSellTrasaction500ApplicationJSONAny?: any;
}
