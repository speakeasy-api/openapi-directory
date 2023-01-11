import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSharedLineGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}

export enum ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum {
    Pending = "pending",
    Available = "available"
}


export class ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum;
}


export class ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class ListSharedLineGroups200ApplicationJsonSharedLineGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers })
  phoneNumbers?: ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum;
}


export class ListSharedLineGroups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_line_groups", elemType: ListSharedLineGroups200ApplicationJsonSharedLineGroups })
  sharedLineGroups?: ListSharedLineGroups200ApplicationJsonSharedLineGroups[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListSharedLineGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSharedLineGroupsQueryParams;
}


export class ListSharedLineGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSharedLineGroups200ApplicationJSONObject?: ListSharedLineGroups200ApplicationJson;
}
