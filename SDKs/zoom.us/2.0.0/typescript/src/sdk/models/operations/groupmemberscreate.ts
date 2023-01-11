import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupMembersCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class GroupMembersCreateApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class GroupMembersCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: GroupMembersCreateApplicationJsonMembers })
  members?: GroupMembersCreateApplicationJsonMembers[];
}


export class GroupMembersCreateMultipartFormDataMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class GroupMembersCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=members;json=true", elemType: GroupMembersCreateMultipartFormDataMembers })
  members?: GroupMembersCreateMultipartFormDataMembers[];
}


export class GroupMembersCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: GroupMembersCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: GroupMembersCreateMultipartFormData1;
}


export class GroupMembersCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupMembersCreatePathParams;

  @SpeakeasyMetadata()
  request: GroupMembersCreateRequests;
}


export class GroupMembersCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  groupMembersCreate201ApplicationJSONAny?: any;
}
