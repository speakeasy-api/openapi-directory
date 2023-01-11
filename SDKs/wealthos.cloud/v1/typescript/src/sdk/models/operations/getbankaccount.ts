import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bank_account_id" })
  bankAccountId: string;
}


export class GetBankAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankAccountPathParams;

  @SpeakeasyMetadata()
  headers: GetBankAccountHeaders;

  @SpeakeasyMetadata()
  security: GetBankAccountSecurity;
}


export class GetBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBankAccount200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getBankAccount400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getBankAccount401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getBankAccount403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getBankAccount404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getBankAccount409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getBankAccount429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getBankAccount500ApplicationJSONAny?: any;
}
