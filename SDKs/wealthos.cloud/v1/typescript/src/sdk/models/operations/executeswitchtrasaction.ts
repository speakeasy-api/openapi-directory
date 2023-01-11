import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteSwitchTrasactionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}

export enum ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum {
    Percentage = "percentage",
    Unit = "unit",
    Value = "value"
}


// ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest
/** 
 * Each individual buy side and sell side instruction of the Switch request
**/
export class ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=investment_product_id" })
  investmentProductId: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


// ExecuteSwitchTrasactionSwitchInstructionRequest
/** 
 * Definition of Switch instruction
**/
export class ExecuteSwitchTrasactionSwitchInstructionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy_instructions", elemType: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest })
  buyInstructions: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[];

  @SpeakeasyMetadata({ data: "json, name=pot_id" })
  potId: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=sell_instructions", elemType: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest })
  sellInstructions: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[];
}


export class ExecuteSwitchTrasactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class ExecuteSwitchTrasactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExecuteSwitchTrasactionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ExecuteSwitchTrasactionSwitchInstructionRequest;

  @SpeakeasyMetadata()
  security: ExecuteSwitchTrasactionSecurity;
}


export class ExecuteSwitchTrasactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  executeSwitchTrasaction200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSwitchTrasaction400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSwitchTrasaction401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSwitchTrasaction403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSwitchTrasaction404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSwitchTrasaction409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSwitchTrasaction429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  executeSwitchTrasaction500ApplicationJSONAny?: any;
}
