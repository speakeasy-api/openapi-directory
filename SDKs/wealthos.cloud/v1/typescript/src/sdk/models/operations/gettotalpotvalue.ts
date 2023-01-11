import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTotalPotValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investor_id" })
  investorId: string;
}


export class GetTotalPotValueHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetTotalPotValueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetTotalPotValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTotalPotValuePathParams;

  @SpeakeasyMetadata()
  headers: GetTotalPotValueHeaders;

  @SpeakeasyMetadata()
  security: GetTotalPotValueSecurity;
}


export class GetTotalPotValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTotalPotValue200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue500ApplicationJSONAny?: any;
}
