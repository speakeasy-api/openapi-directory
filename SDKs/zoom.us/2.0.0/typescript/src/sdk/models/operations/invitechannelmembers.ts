import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InviteChannelMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class InviteChannelMembersApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


export class InviteChannelMembersApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: InviteChannelMembersApplicationJsonMembers })
  members?: InviteChannelMembersApplicationJsonMembers[];
}


export class InviteChannelMembersMultipartFormDataMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


export class InviteChannelMembersMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=members;json=true", elemType: InviteChannelMembersMultipartFormDataMembers })
  members?: InviteChannelMembersMultipartFormDataMembers[];
}


export class InviteChannelMembersRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: InviteChannelMembersApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: InviteChannelMembersMultipartFormData1;
}


export class InviteChannelMembersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class InviteChannelMembers201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];
}


export class InviteChannelMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InviteChannelMembersPathParams;

  @SpeakeasyMetadata()
  request?: InviteChannelMembersRequests;

  @SpeakeasyMetadata()
  security: InviteChannelMembersSecurity;
}


export class InviteChannelMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inviteChannelMembers201ApplicationJSONObject?: InviteChannelMembers201ApplicationJson;
}
