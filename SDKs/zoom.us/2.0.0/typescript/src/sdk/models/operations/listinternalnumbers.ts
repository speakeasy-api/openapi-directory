import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListInternalNumbersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class ListInternalNumbersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}

export enum ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum {
    EnGb = "en-GB",
    EnUs = "en-US",
    DeDe = "de-DE"
}


export class ListInternalNumbers200ApplicationJsonInternalNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_for_external_meetings" })
  allowForExternalMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_join" })
  allowJoin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=display_number" })
  displayNumber: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages: ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class ListInternalNumbers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=internal_numbers", elemType: ListInternalNumbers200ApplicationJsonInternalNumbers })
  internalNumbers?: ListInternalNumbers200ApplicationJsonInternalNumbers[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListInternalNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListInternalNumbersPathParams;

  @SpeakeasyMetadata()
  queryParams: ListInternalNumbersQueryParams;
}


export class ListInternalNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listInternalNumbers200ApplicationJSONObject?: ListInternalNumbers200ApplicationJson;
}
