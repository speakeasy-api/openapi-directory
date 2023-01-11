import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetABlockedListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blockedListId" })
  blockedListId: string;
}


export class GetABlockedListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum GetABlockedList200ApplicationJsonBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum GetABlockedList200ApplicationJsonMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}

export enum GetABlockedList200ApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class GetABlockedList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block_type" })
  blockType?: GetABlockedList200ApplicationJsonBlockTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=match_type" })
  matchType?: GetABlockedList200ApplicationJsonMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetABlockedList200ApplicationJsonStatusEnum;
}


export class GetABlockedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetABlockedListPathParams;

  @SpeakeasyMetadata()
  security: GetABlockedListSecurity;
}


export class GetABlockedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getABlockedList200ApplicationJSONObject?: GetABlockedList200ApplicationJson;
}
