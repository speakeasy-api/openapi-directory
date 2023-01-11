import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBlockedListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blockedListId" })
  blockedListId: string;
}

export enum UpdateBlockedListApplicationJsonBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum UpdateBlockedListApplicationJsonMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}

export enum UpdateBlockedListApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class UpdateBlockedListApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block_type" })
  blockType?: UpdateBlockedListApplicationJsonBlockTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=match_type" })
  matchType?: UpdateBlockedListApplicationJsonMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateBlockedListApplicationJsonStatusEnum;
}

export enum UpdateBlockedListMultipartFormDataBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum UpdateBlockedListMultipartFormDataMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}

export enum UpdateBlockedListMultipartFormDataStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class UpdateBlockedListMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=block_type" })
  blockType?: UpdateBlockedListMultipartFormDataBlockTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=match_type" })
  matchType?: UpdateBlockedListMultipartFormDataMatchTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=status" })
  status?: UpdateBlockedListMultipartFormDataStatusEnum;
}


export class UpdateBlockedListRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateBlockedListApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateBlockedListMultipartFormData;
}


export class UpdateBlockedListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateBlockedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBlockedListPathParams;

  @SpeakeasyMetadata()
  request?: UpdateBlockedListRequests;

  @SpeakeasyMetadata()
  security: UpdateBlockedListSecurity;
}


export class UpdateBlockedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateBlockedList204ApplicationJSONAny?: any;
}
