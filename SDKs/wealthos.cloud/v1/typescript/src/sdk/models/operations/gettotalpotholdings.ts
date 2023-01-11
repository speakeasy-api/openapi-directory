import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTotalPotHoldingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investor_id" })
  investorId: string;
}


export class GetTotalPotHoldingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetTotalPotHoldingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetTotalPotHoldingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTotalPotHoldingsPathParams;

  @SpeakeasyMetadata()
  headers: GetTotalPotHoldingsHeaders;

  @SpeakeasyMetadata()
  security: GetTotalPotHoldingsSecurity;
}


export class GetTotalPotHoldingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTotalPotHoldings200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings500ApplicationJSONAny?: any;
}
