import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListByocsipTrunkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListByocsipTrunkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListByocsipTrunk200ApplicationJsonByocSipTrunk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_account" })
  carrierAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=sbc_label" })
  sbcLabel?: string;
}


export class ListByocsipTrunk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byoc_sip_trunk", elemType: ListByocsipTrunk200ApplicationJsonByocSipTrunk })
  byocSipTrunk?: ListByocsipTrunk200ApplicationJsonByocSipTrunk[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class ListByocsipTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListByocsipTrunkQueryParams;

  @SpeakeasyMetadata()
  security: ListByocsipTrunkSecurity;
}


export class ListByocsipTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listBYOCSIPTrunk200ApplicationJSONObject?: ListByocsipTrunk200ApplicationJson;
}
