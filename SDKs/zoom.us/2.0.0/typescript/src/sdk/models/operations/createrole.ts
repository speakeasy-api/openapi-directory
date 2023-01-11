import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRoleApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privileges" })
  privileges?: string[];
}


export class CreateRoleMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=privileges;json=true" })
  privileges?: string[];
}


export class CreateRoleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CreateRoleApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: CreateRoleMultipartFormData;
}


export class CreateRoleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class CreateRole201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privileges" })
  privileges?: string[];

  @SpeakeasyMetadata({ data: "json, name=total_members" })
  totalMembers?: number;
}


export class CreateRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateRoleRequests;

  @SpeakeasyMetadata()
  security: CreateRoleSecurity;
}


export class CreateRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createRole200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createRole201ApplicationJSONObject?: CreateRole201ApplicationJson;
}
