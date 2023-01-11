import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCommonAreaPhonesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListCommonAreaPhonesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}


export class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum;
}


export class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListCommonAreaPhones200ApplicationJsonCommonAreaPhones extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calling_plans", elemType: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans })
  callingPlans?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans[];

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers })
  phoneNumbers?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class ListCommonAreaPhones200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phones", elemType: ListCommonAreaPhones200ApplicationJsonCommonAreaPhones })
  commonAreaPhones?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhones[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListCommonAreaPhonesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCommonAreaPhonesQueryParams;

  @SpeakeasyMetadata()
  security: ListCommonAreaPhonesSecurity;
}


export class ListCommonAreaPhonesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listCommonAreaPhones200ApplicationJSONObject?: ListCommonAreaPhones200ApplicationJson;
}
