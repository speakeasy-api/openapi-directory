import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: string;
}


export class GetPaymentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPaymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentPathParams;

  @SpeakeasyMetadata()
  headers: GetPaymentHeaders;

  @SpeakeasyMetadata()
  security: GetPaymentSecurity;
}


export class GetPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForPayments?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPayment400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPayment401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPayment403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPayment404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPayment429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPayment500ApplicationJSONAny?: any;
}
