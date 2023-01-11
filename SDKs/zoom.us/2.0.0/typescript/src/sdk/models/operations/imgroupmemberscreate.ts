import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImGroupMembersCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ImGroupMembersCreateApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class ImGroupMembersCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: ImGroupMembersCreateApplicationJsonMembers })
  members?: ImGroupMembersCreateApplicationJsonMembers[];
}


export class ImGroupMembersCreateMultipartFormDataMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class ImGroupMembersCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=members;json=true", elemType: ImGroupMembersCreateMultipartFormDataMembers })
  members?: ImGroupMembersCreateMultipartFormDataMembers[];
}


export class ImGroupMembersCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: ImGroupMembersCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: ImGroupMembersCreateMultipartFormData1;
}


export class ImGroupMembersCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ImGroupMembersCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImGroupMembersCreatePathParams;

  @SpeakeasyMetadata()
  request: ImGroupMembersCreateRequests;

  @SpeakeasyMetadata()
  security: ImGroupMembersCreateSecurity;
}


export class ImGroupMembersCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  imGroupMembersCreate201ApplicationJSONAny?: any;
}
