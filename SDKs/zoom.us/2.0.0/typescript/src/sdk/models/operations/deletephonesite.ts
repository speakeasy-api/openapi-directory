import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePhoneSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteId" })
  siteId: string;
}


export class DeletePhoneSiteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transfer_site_id" })
  transferSiteId: string;
}


export class DeletePhoneSiteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeletePhoneSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePhoneSitePathParams;

  @SpeakeasyMetadata()
  queryParams: DeletePhoneSiteQueryParams;

  @SpeakeasyMetadata()
  security: DeletePhoneSiteSecurity;
}


export class DeletePhoneSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deletePhoneSite204ApplicationJSONAny?: any;
}
