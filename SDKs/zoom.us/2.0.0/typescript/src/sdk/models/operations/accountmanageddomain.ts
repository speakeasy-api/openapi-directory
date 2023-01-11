import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountManagedDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AccountManagedDomainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AccountManagedDomain200ApplicationJsonDomains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// AccountManagedDomain200ApplicationJson
/** 
 * List of managed domains.
**/
export class AccountManagedDomain200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: AccountManagedDomain200ApplicationJsonDomains })
  domains?: AccountManagedDomain200ApplicationJsonDomains[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class AccountManagedDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountManagedDomainPathParams;

  @SpeakeasyMetadata()
  security: AccountManagedDomainSecurity;
}


export class AccountManagedDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountManagedDomain200ApplicationJSONObject?: AccountManagedDomain200ApplicationJson;
}
