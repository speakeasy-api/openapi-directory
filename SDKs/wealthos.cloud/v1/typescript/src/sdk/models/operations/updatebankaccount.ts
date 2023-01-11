import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bank_account_id" })
  bankAccountId: string;
}


export class UpdateBankAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class UpdateBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class UpdateBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBankAccountPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBankAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdateBankAccountSecurity;
}


export class UpdateBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateBankAccount201ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount500ApplicationJSONAny?: any;
}
