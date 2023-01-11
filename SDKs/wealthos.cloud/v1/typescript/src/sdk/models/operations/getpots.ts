import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investor_id" })
  investorId: string;
}


export class GetPotsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=financial_product_id" })
  financialProductId?: string;
}


export class GetPotsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


// GetPots200ApplicationJson
/** 
 * Array of all active investment pots created by the investor
**/
export class GetPots200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pots" })
  pots: any[];
}


export class GetPotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPotsQueryParams;

  @SpeakeasyMetadata()
  headers: GetPotsHeaders;

  @SpeakeasyMetadata()
  security: GetPotsSecurity;
}


export class GetPotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPots200ApplicationJSONObject?: GetPots200ApplicationJson;

  @SpeakeasyMetadata()
  getPots400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPots401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPots403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPots404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPots429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPots500ApplicationJSONAny?: any;
}
