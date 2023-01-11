import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleId" })
  roleId: string;
}


// UpdateRoleApplicationJsonSubAccountPrivileges
/** 
 * This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
**/
export class UpdateRoleApplicationJsonSubAccountPrivileges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=second_level" })
  secondLevel?: number;
}


export class UpdateRoleApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privileges" })
  privileges?: string[];

  @SpeakeasyMetadata({ data: "json, name=sub_account_privileges" })
  subAccountPrivileges?: UpdateRoleApplicationJsonSubAccountPrivileges;

  @SpeakeasyMetadata({ data: "json, name=total_members" })
  totalMembers?: number;
}


// UpdateRoleMultipartFormDataSubAccountPrivileges
/** 
 * This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
**/
export class UpdateRoleMultipartFormDataSubAccountPrivileges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=second_level" })
  secondLevel?: number;
}


export class UpdateRoleMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=privileges;json=true" })
  privileges?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=sub_account_privileges;json=true" })
  subAccountPrivileges?: UpdateRoleMultipartFormDataSubAccountPrivileges;

  @SpeakeasyMetadata({ data: "multipart_form, name=total_members" })
  totalMembers?: number;
}


export class UpdateRoleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateRoleApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateRoleMultipartFormData;
}


export class UpdateRoleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRolePathParams;

  @SpeakeasyMetadata()
  request?: UpdateRoleRequests;

  @SpeakeasyMetadata()
  security: UpdateRoleSecurity;
}


export class UpdateRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateRole200ApplicationJSONAny?: any;
}
