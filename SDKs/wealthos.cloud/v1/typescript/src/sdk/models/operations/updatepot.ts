import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class UpdatePotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class UpdatePotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class UpdatePotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePotPathParams;

  @SpeakeasyMetadata()
  headers: UpdatePotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdatePotSecurity;
}


export class UpdatePotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePot200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePot400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePot401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePot403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePot404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePot409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePot429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePot500ApplicationJSONAny?: any;
}
