import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddMembersToSharedLineGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" })
  sharedLineGroupId: string;
}


export class AddMembersToSharedLineGroupApplicationJsonMembersUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// AddMembersToSharedLineGroupApplicationJsonMembers
/** 
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
**/
export class AddMembersToSharedLineGroupApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phone_ids" })
  commonAreaPhoneIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: AddMembersToSharedLineGroupApplicationJsonMembersUsers })
  users?: AddMembersToSharedLineGroupApplicationJsonMembersUsers[];
}


export class AddMembersToSharedLineGroupApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: AddMembersToSharedLineGroupApplicationJsonMembers;
}


export class AddMembersToSharedLineGroupMultipartFormDataMembersUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// AddMembersToSharedLineGroupMultipartFormDataMembers
/** 
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
**/
export class AddMembersToSharedLineGroupMultipartFormDataMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phone_ids" })
  commonAreaPhoneIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: AddMembersToSharedLineGroupMultipartFormDataMembersUsers })
  users?: AddMembersToSharedLineGroupMultipartFormDataMembersUsers[];
}


export class AddMembersToSharedLineGroupMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=members;json=true" })
  members?: AddMembersToSharedLineGroupMultipartFormDataMembers;
}


export class AddMembersToSharedLineGroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddMembersToSharedLineGroupApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddMembersToSharedLineGroupMultipartFormData;
}


export class AddMembersToSharedLineGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddMembersToSharedLineGroupPathParams;

  @SpeakeasyMetadata()
  request?: AddMembersToSharedLineGroupRequests;
}


export class AddMembersToSharedLineGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addMembersToSharedLineGroup201ApplicationJSONAny?: any;
}
