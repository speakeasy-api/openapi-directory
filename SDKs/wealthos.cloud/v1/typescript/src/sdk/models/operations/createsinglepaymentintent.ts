import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSinglePaymentIntentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateSinglePaymentIntentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateSinglePaymentIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSinglePaymentIntentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CreateSinglePaymentIntentSecurity;
}


export class CreateSinglePaymentIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSinglePaymentIntent201ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent500ApplicationJSONAny?: any;
}
