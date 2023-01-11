import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveAUserLevelChannelMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
  memberId: string;
}


export class RemoveAUserLevelChannelMemberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class RemoveAUserLevelChannelMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveAUserLevelChannelMemberPathParams;

  @SpeakeasyMetadata()
  security: RemoveAUserLevelChannelMemberSecurity;
}


export class RemoveAUserLevelChannelMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeAUserLevelChannelMember204ApplicationJSONAny?: any;
}
