import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListChannelMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ListChannelMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListChannelMembersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListChannelMembers200ApplicationJsonMembersRoleEnum {
    Admin = "admin",
    Owner = "owner",
    Member = "member"
}


export class ListChannelMembers200ApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: ListChannelMembers200ApplicationJsonMembersRoleEnum;
}


export class ListChannelMembers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: ListChannelMembers200ApplicationJsonMembers })
  members?: ListChannelMembers200ApplicationJsonMembers[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListChannelMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListChannelMembersPathParams;

  @SpeakeasyMetadata()
  queryParams: ListChannelMembersQueryParams;

  @SpeakeasyMetadata()
  security: ListChannelMembersSecurity;
}


export class ListChannelMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listChannelMembers200ApplicationJSONObject?: ListChannelMembers200ApplicationJson;
}
