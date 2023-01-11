import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRoleInformationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleId" })
  roleId: string;
}


export class GetRoleInformationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// GetRoleInformation200ApplicationJsonSubAccountPrivileges
/** 
 * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
**/
export class GetRoleInformation200ApplicationJsonSubAccountPrivileges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=second_level" })
  secondLevel?: number;
}


export class GetRoleInformation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privileges" })
  privileges?: string[];

  @SpeakeasyMetadata({ data: "json, name=sub_account_privileges" })
  subAccountPrivileges?: GetRoleInformation200ApplicationJsonSubAccountPrivileges;

  @SpeakeasyMetadata({ data: "json, name=total_members" })
  totalMembers?: number;
}


export class GetRoleInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoleInformationPathParams;

  @SpeakeasyMetadata()
  security: GetRoleInformationSecurity;
}


export class GetRoleInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRoleInformation200ApplicationJSONObject?: GetRoleInformation200ApplicationJson;
}
