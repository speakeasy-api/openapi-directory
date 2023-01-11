import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteSellTrasactionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


// ExecuteSellTrasactionSellTransactionRequestInstructionBuySell
/** 
 * Definition of an single instruction(buy|sell)
**/
export class ExecuteSellTrasactionSellTransactionRequestInstructionBuySell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_order_id" })
  clientOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=investment_product_id" })
  investmentProductId: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// ExecuteSellTrasactionSellTransactionRequest
/** 
 * Definition of an sell transaction request
**/
export class ExecuteSellTrasactionSellTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pot_id" })
  potId: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=sell_instructions", elemType: ExecuteSellTrasactionSellTransactionRequestInstructionBuySell })
  sellInstructions: ExecuteSellTrasactionSellTransactionRequestInstructionBuySell[];
}


export class ExecuteSellTrasactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class ExecuteSellTrasactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExecuteSellTrasactionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ExecuteSellTrasactionSellTransactionRequest;

  @SpeakeasyMetadata()
  security: ExecuteSellTrasactionSecurity;
}


export class ExecuteSellTrasactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  executeSellTrasaction200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction500ApplicationJSONAny?: any;
}
