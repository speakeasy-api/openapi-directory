import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddAnumberToBlockedListApplicationJsonBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum AddAnumberToBlockedListApplicationJsonMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}

export enum AddAnumberToBlockedListApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class AddAnumberToBlockedListApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block_type" })
  blockType?: AddAnumberToBlockedListApplicationJsonBlockTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=match_type" })
  matchType?: AddAnumberToBlockedListApplicationJsonMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AddAnumberToBlockedListApplicationJsonStatusEnum;
}

export enum AddAnumberToBlockedListMultipartFormDataBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum AddAnumberToBlockedListMultipartFormDataMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}

export enum AddAnumberToBlockedListMultipartFormDataStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class AddAnumberToBlockedListMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=block_type" })
  blockType?: AddAnumberToBlockedListMultipartFormDataBlockTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=match_type" })
  matchType?: AddAnumberToBlockedListMultipartFormDataMatchTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=status" })
  status?: AddAnumberToBlockedListMultipartFormDataStatusEnum;
}


export class AddAnumberToBlockedListRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddAnumberToBlockedListApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddAnumberToBlockedListMultipartFormData;
}


export class AddAnumberToBlockedListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AddAnumberToBlockedList201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class AddAnumberToBlockedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: AddAnumberToBlockedListRequests;

  @SpeakeasyMetadata()
  security: AddAnumberToBlockedListSecurity;
}


export class AddAnumberToBlockedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addAnumberToBlockedList201ApplicationJSONObject?: AddAnumberToBlockedList201ApplicationJson;
}
