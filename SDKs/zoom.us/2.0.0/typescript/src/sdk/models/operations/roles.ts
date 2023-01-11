import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RolesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// RolesRoleList
/** 
 * List of Roles
**/
export class RolesRoleList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: any[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class RolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: RolesSecurity;
}


export class RolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  roleList?: RolesRoleList;

  @SpeakeasyMetadata()
  statusCode: number;
}
