import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: string;
}


export class GetUserContactQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_presence_status" })
  queryPresenceStatus?: boolean;
}


export class GetUserContactSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum GetUserContact200ApplicationJsonPresenceStatusEnum {
    DoNotDisturb = "Do_Not_Disturb",
    Away = "Away",
    Available = "Available",
    Offline = "Offline"
}


export class GetUserContact200ApplicationJson extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=presence_status" })
  presenceStatus?: GetUserContact200ApplicationJsonPresenceStatusEnum;
}


export class GetUserContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserContactPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserContactQueryParams;

  @SpeakeasyMetadata()
  security: GetUserContactSecurity;
}


export class GetUserContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUserContact200ApplicationJSONObject?: GetUserContact200ApplicationJson;
}
