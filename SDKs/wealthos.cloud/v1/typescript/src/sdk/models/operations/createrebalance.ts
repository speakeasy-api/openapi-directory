import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRebalanceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}

export enum CreateRebalanceSwitchInstructionRequestTypeEnum {
    Pot = "pot",
    Investor = "investor",
    Portfolio = "portfolio"
}


// CreateRebalanceSwitchInstructionRequest
/** 
 * Definition of Switch instruction
**/
export class CreateRebalanceSwitchInstructionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateRebalanceSwitchInstructionRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}


export class CreateRebalanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateRebalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRebalanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateRebalanceSwitchInstructionRequest;

  @SpeakeasyMetadata()
  security: CreateRebalanceSecurity;
}


export class CreateRebalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRebalance201ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createRebalance400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createRebalance401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createRebalance403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createRebalance404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createRebalance409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createRebalance429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createRebalance500ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
