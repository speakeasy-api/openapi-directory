import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPhoneUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;
}


export class ListPhoneUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListPhoneUsers200ApplicationJsonUsersCallingPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ListPhoneUsers200ApplicationJsonUsersSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListPhoneUsers200ApplicationJsonUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calling_plans", elemType: ListPhoneUsers200ApplicationJsonUsersCallingPlans })
  callingPlans?: ListPhoneUsers200ApplicationJsonUsersCallingPlans[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_user_id" })
  phoneUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: ListPhoneUsers200ApplicationJsonUsersSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class ListPhoneUsers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: ListPhoneUsers200ApplicationJsonUsers })
  users?: ListPhoneUsers200ApplicationJsonUsers[];
}


export class ListPhoneUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPhoneUsersQueryParams;

  @SpeakeasyMetadata()
  security: ListPhoneUsersSecurity;
}


export class ListPhoneUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPhoneUsers200ApplicationJSONObject?: ListPhoneUsers200ApplicationJson;
}
