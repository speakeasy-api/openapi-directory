import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class GetPotValueHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotValueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPotValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotValuePathParams;

  @SpeakeasyMetadata()
  headers: GetPotValueHeaders;

  @SpeakeasyMetadata()
  security: GetPotValueSecurity;
}


export class GetPotValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPotValue200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotValue400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotValue401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotValue403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotValue404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotValue429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotValue500ApplicationJSONAny?: any;
}
