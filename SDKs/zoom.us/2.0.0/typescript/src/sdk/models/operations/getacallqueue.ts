import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetACallQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callQueueId" })
  callQueueId: string;
}


export class GetACallQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetACallQueue200ApplicationJsonMembersCommonAreaPhones extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum GetACallQueue200ApplicationJsonMembersUsersLevelEnum {
    Manager = "manager",
    User = "user"
}


export class GetACallQueue200ApplicationJsonMembersUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: GetACallQueue200ApplicationJsonMembersUsersLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=receive_call" })
  receiveCall?: boolean;
}


export class GetACallQueue200ApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phones", elemType: GetACallQueue200ApplicationJsonMembersCommonAreaPhones })
  commonAreaPhones?: GetACallQueue200ApplicationJsonMembersCommonAreaPhones[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: GetACallQueue200ApplicationJsonMembersUsers })
  users?: GetACallQueue200ApplicationJsonMembersUsers[];
}

export enum GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}


export class GetACallQueue200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum;
}


export class GetACallQueue200ApplicationJsonSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum GetACallQueue200ApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class GetACallQueue200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: GetACallQueue200ApplicationJsonMembers;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: GetACallQueue200ApplicationJsonPhoneNumbers })
  phoneNumbers?: GetACallQueue200ApplicationJsonPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: GetACallQueue200ApplicationJsonSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetACallQueue200ApplicationJsonStatusEnum;
}


export class GetACallQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetACallQueuePathParams;

  @SpeakeasyMetadata()
  security: GetACallQueueSecurity;
}


export class GetACallQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getACallQueue200ApplicationJSONObject?: GetACallQueue200ApplicationJson;
}
