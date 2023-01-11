import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDigitalSignageContentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=folder_id" })
  folderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ListDigitalSignageContent200ApplicationJsonContents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListDigitalSignageContent200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents", elemType: ListDigitalSignageContent200ApplicationJsonContents })
  contents?: ListDigitalSignageContent200ApplicationJsonContents[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class ListDigitalSignageContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListDigitalSignageContentQueryParams;
}


export class ListDigitalSignageContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDigitalSignageContent200ApplicationJSONObject?: ListDigitalSignageContent200ApplicationJson;
}
