import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchCompanyContactsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_presence_status" })
  queryPresenceStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_key" })
  searchKey: string;
}

export enum SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum {
    DoNotDisturb = "Do_Not_Disturb",
    Away = "Away",
    Available = "Available",
    Offline = "Offline"
}


export class SearchCompanyContacts200ApplicationJsonContacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=direct_numbers" })
  directNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=im_group_id" })
  imGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=im_group_name" })
  imGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=job_title" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=presence_status" })
  presenceStatus?: SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sip_phone_number" })
  sipPhoneNumber?: string;
}


export class SearchCompanyContacts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: SearchCompanyContacts200ApplicationJsonContacts })
  contacts?: SearchCompanyContacts200ApplicationJsonContacts[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class SearchCompanyContactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCompanyContactsQueryParams;
}


export class SearchCompanyContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchCompanyContacts200ApplicationJSONObject?: SearchCompanyContacts200ApplicationJson;
}
