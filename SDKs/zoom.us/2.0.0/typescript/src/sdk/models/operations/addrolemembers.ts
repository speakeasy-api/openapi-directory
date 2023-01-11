import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddRoleMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleId" })
  roleId: string;
}


export class AddRoleMembersApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class AddRoleMembersApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: AddRoleMembersApplicationJsonMembers })
  members?: AddRoleMembersApplicationJsonMembers[];
}


export class AddRoleMembersMultipartFormDataMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class AddRoleMembersMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=members;json=true", elemType: AddRoleMembersMultipartFormDataMembers })
  members?: AddRoleMembersMultipartFormDataMembers[];
}


export class AddRoleMembersRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddRoleMembersApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddRoleMembersMultipartFormData1;
}


export class AddRoleMembersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AddRoleMembers201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_at" })
  addAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string;
}


export class AddRoleMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddRoleMembersPathParams;

  @SpeakeasyMetadata()
  request: AddRoleMembersRequests;

  @SpeakeasyMetadata()
  security: AddRoleMembersSecurity;
}


export class AddRoleMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addRoleMembers201ApplicationJSONObject?: AddRoleMembers201ApplicationJson;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
