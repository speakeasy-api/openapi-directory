import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetChannelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetChannels200ApplicationJsonChannelsChannelsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_to_add_external_users" })
  allowToAddExternalUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=new_members_can_see_previous_messages_files" })
  newMembersCanSeePreviousMessagesFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=posting_permissions" })
  postingPermissions?: number;
}


export class GetChannels200ApplicationJsonChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels_settings" })
  channelsSettings?: GetChannels200ApplicationJsonChannelsChannelsSettings;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class GetChannels200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: GetChannels200ApplicationJsonChannels })
  channels?: GetChannels200ApplicationJsonChannels[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class GetChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChannelsQueryParams;

  @SpeakeasyMetadata()
  security: GetChannelsSecurity;
}


export class GetChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChannels200ApplicationJSONObject?: GetChannels200ApplicationJson;
}
