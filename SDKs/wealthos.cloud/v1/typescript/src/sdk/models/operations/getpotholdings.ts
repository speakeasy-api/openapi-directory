import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotHoldingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class GetPotHoldingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotHoldingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPotHoldingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotHoldingsPathParams;

  @SpeakeasyMetadata()
  headers: GetPotHoldingsHeaders;

  @SpeakeasyMetadata()
  security: GetPotHoldingsSecurity;
}


export class GetPotHoldingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPotHoldings200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings500ApplicationJSONAny?: any;
}
