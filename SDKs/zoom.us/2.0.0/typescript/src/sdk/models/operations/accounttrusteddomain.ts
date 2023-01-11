import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountTrustedDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AccountTrustedDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountTrustedDomainPathParams;
}


export class AccountTrustedDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountTrustedDomain200ApplicationJSONAny?: any;
}
