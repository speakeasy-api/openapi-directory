import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreatePotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreatePotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: CreatePotSecurity;
}


export class CreatePotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPot201ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createPot400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createPot401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createPot403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createPot409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createPot429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createPot500ApplicationJSONAny?: any;
}
