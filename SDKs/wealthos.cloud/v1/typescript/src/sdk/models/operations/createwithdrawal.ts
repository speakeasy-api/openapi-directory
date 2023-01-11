import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateWithdrawalHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateWithdrawalSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateWithdrawalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWithdrawalHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CreateWithdrawalSecurity;
}


export class CreateWithdrawalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForWithdrawalCreationResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createWithdrawal400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal500ApplicationJSONAny?: any;
}
