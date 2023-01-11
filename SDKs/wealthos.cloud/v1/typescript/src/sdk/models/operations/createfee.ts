import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateFeeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateFeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFeeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CreateFeeSecurity;
}


export class CreateFeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForFeeCreationResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createFee400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createFee401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createFee403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createFee404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createFee409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createFee429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createFee500ApplicationJSONAny?: any;
}
