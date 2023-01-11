import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleId" })
  roleId: string;
}


export class DeleteRoleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeleteRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRolePathParams;

  @SpeakeasyMetadata()
  security: DeleteRoleSecurity;
}


export class DeleteRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteRole204ApplicationJSONObject?: Record<string, any>;
}
