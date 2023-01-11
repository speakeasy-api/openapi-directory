import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RoleMemberDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleId" })
  roleId: string;
}


export class RoleMemberDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class RoleMemberDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RoleMemberDeletePathParams;

  @SpeakeasyMetadata()
  security: RoleMemberDeleteSecurity;
}


export class RoleMemberDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
