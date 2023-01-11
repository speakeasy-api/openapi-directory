import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListBlockedListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListBlockedListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}

export enum ListBlockedList200ApplicationJsonBlockedListStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class ListBlockedList200ApplicationJsonBlockedList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block_type" })
  blockType?: ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=match_type" })
  matchType?: ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListBlockedList200ApplicationJsonBlockedListStatusEnum;
}


export class ListBlockedList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked_list", elemType: ListBlockedList200ApplicationJsonBlockedList })
  blockedList?: ListBlockedList200ApplicationJsonBlockedList[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListBlockedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListBlockedListQueryParams;

  @SpeakeasyMetadata()
  security: ListBlockedListSecurity;
}


export class ListBlockedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listBlockedList200ApplicationJSONObject?: ListBlockedList200ApplicationJson;
}
