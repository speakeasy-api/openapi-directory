import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllBankAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=investor_id" })
  investorId?: string;
}


export class GetAllBankAccountsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetAllBankAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


// GetAllBankAccounts200ApplicationJson
/** 
 * Array of bank accounts
**/
export class GetAllBankAccounts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccounts" })
  bankAccounts?: any[];
}


export class GetAllBankAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllBankAccountsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAllBankAccountsHeaders;

  @SpeakeasyMetadata()
  security: GetAllBankAccountsSecurity;
}


export class GetAllBankAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllBankAccounts200ApplicationJSONObject?: GetAllBankAccounts200ApplicationJson;

  @SpeakeasyMetadata()
  getAllBankAccounts400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllBankAccounts401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllBankAccounts403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllBankAccounts404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllBankAccounts409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllBankAccounts429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllBankAccounts500ApplicationJSONAny?: any;
}
