import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImGroupMembersDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
  memberId: string;
}


export class ImGroupMembersDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ImGroupMembersDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImGroupMembersDeletePathParams;

  @SpeakeasyMetadata()
  security: ImGroupMembersDeleteSecurity;
}


export class ImGroupMembersDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
