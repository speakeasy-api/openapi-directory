import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountLockSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetAccountLockSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=custom_query_fields" })
  customQueryFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: string;
}


export class GetAccountLockSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountLockSettingsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountLockSettingsQueryParams;
}


export class GetAccountLockSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAccountLockSettings200ApplicationJSONObject?: Record<string, any>;
}
