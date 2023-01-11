import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBankAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateBankAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: CreateBankAccountSecurity;
}


export class CreateBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createBankAccount201ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createBankAccount400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createBankAccount401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createBankAccount403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createBankAccount404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createBankAccount409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createBankAccount429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createBankAccount500ApplicationJSONAny?: any;
}
