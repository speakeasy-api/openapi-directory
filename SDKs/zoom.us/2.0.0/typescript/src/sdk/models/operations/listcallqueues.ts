import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCallQueuesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListCallQueuesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}


export class ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum;
}


export class ListCallQueues200ApplicationJsonCallQueuesSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum ListCallQueues200ApplicationJsonCallQueuesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class ListCallQueues200ApplicationJsonCallQueues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers })
  phoneNumbers?: ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: ListCallQueues200ApplicationJsonCallQueuesSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListCallQueues200ApplicationJsonCallQueuesStatusEnum;
}


export class ListCallQueues200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_queues", elemType: ListCallQueues200ApplicationJsonCallQueues })
  callQueues?: ListCallQueues200ApplicationJsonCallQueues[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListCallQueuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCallQueuesQueryParams;

  @SpeakeasyMetadata()
  security: ListCallQueuesSecurity;
}


export class ListCallQueuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listCallQueues200ApplicationJSONObject?: ListCallQueues200ApplicationJson;
}
