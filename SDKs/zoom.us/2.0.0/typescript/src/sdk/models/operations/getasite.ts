import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetASitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteId" })
  siteId: string;
}


export class GetASiteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// GetASite200ApplicationJsonCountry
/** 
 * Site country
**/
export class GetASite200ApplicationJsonCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetASite200ApplicationJsonMainAutoReceptionist
/** 
 * [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
**/
export class GetASite200ApplicationJsonMainAutoReceptionist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_id" })
  extensionId?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetASite200ApplicationJsonShortExtension
/** 
 * Short extension of the phone site.
**/
export class GetASite200ApplicationJsonShortExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;
}


export class GetASite200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: GetASite200ApplicationJsonCountry;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=main_auto_receptionist" })
  mainAutoReceptionist?: GetASite200ApplicationJsonMainAutoReceptionist;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=short_extension" })
  shortExtension?: GetASite200ApplicationJsonShortExtension;

  @SpeakeasyMetadata({ data: "json, name=site_code" })
  siteCode?: number;
}


export class GetASiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetASitePathParams;

  @SpeakeasyMetadata()
  security: GetASiteSecurity;
}


export class GetASiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getASite200ApplicationJSONObject?: GetASite200ApplicationJson;
}
