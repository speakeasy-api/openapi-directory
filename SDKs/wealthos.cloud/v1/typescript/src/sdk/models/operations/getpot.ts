import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class GetPotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotPathParams;

  @SpeakeasyMetadata()
  headers: GetPotHeaders;

  @SpeakeasyMetadata()
  security: GetPotSecurity;
}


export class GetPotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPot200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPot401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPot403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPot404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPot429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPot500ApplicationJSONAny?: any;
}
