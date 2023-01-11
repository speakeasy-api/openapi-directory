import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRebalanceDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rebalance_request_id" })
  rebalanceRequestId: string;
}


export class GetRebalanceDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetRebalanceDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetRebalanceDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRebalanceDetailsPathParams;

  @SpeakeasyMetadata()
  headers: GetRebalanceDetailsHeaders;

  @SpeakeasyMetadata()
  security: GetRebalanceDetailsSecurity;
}


export class GetRebalanceDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRebalanceDetails200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails500ApplicationJSONAny?: any;
}
