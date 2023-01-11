import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPhoneSitesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


// ListPhoneSites200ApplicationJsonSitesCountry
/** 
 * Site country
**/
export class ListPhoneSites200ApplicationJsonSitesCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist
/** 
 * Auto Receptionist for each site.
**/
export class ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_id" })
  extensionId?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListPhoneSites200ApplicationJsonSites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: ListPhoneSites200ApplicationJsonSitesCountry;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=main_auto_receptionist" })
  mainAutoReceptionist?: ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=site_code" })
  siteCode?: string;
}


export class ListPhoneSites200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "json, name=sites", elemType: ListPhoneSites200ApplicationJsonSites })
  sites?: ListPhoneSites200ApplicationJsonSites[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: string;
}


export class ListPhoneSitesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPhoneSitesQueryParams;
}


export class ListPhoneSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPhoneSites200ApplicationJSONObject?: ListPhoneSites200ApplicationJson;
}
