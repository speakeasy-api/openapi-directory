import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListAccountPhoneNumbersExtensionTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}

export enum ListAccountPhoneNumbersNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}

export enum ListAccountPhoneNumbersTypeEnum {
    Assigned = "assigned",
    Unassigned = "unassigned",
    All = "all"
}


export class ListAccountPhoneNumbersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extension_type" })
  extensionType?: ListAccountPhoneNumbersExtensionTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number_type" })
  numberType?: ListAccountPhoneNumbersNumberTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pending_numbers" })
  pendingNumbers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ListAccountPhoneNumbersTypeEnum;
}


export class ListAccountPhoneNumbersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}


export class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum;
}


// ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier
/** 
 * Displayed when the `type` request parameter is `byoc`.
**/
export class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}


// ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup
/** 
 * Displayed when the `type` request parameter is `byoc`.
**/
export class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}

export enum ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum {
    Pending = "pending",
    Available = "available"
}


export class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee;

  @SpeakeasyMetadata({ data: "json, name=capability" })
  capability?: string[];

  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sip_group" })
  sipGroup?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum;
}


export class ListAccountPhoneNumbers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers })
  phoneNumbers?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListAccountPhoneNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAccountPhoneNumbersQueryParams;

  @SpeakeasyMetadata()
  security: ListAccountPhoneNumbersSecurity;
}


export class ListAccountPhoneNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAccountPhoneNumbers200ApplicationJSONObject?: ListAccountPhoneNumbers200ApplicationJson;
}
