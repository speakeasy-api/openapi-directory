import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddMembersToCallQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callQueueId" })
  callQueueId: string;
}


export class AddMembersToCallQueueApplicationJsonMembersUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// AddMembersToCallQueueApplicationJsonMembers
/** 
 * A maximum of 10 members can be added at a time.
**/
export class AddMembersToCallQueueApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phone_ids" })
  commonAreaPhoneIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: AddMembersToCallQueueApplicationJsonMembersUsers })
  users?: AddMembersToCallQueueApplicationJsonMembersUsers[];
}


export class AddMembersToCallQueueApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: AddMembersToCallQueueApplicationJsonMembers;
}


export class AddMembersToCallQueueMultipartFormDataMembersUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// AddMembersToCallQueueMultipartFormDataMembers
/** 
 * A maximum of 10 members can be added at a time.
**/
export class AddMembersToCallQueueMultipartFormDataMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phone_ids" })
  commonAreaPhoneIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: AddMembersToCallQueueMultipartFormDataMembersUsers })
  users?: AddMembersToCallQueueMultipartFormDataMembersUsers[];
}


export class AddMembersToCallQueueMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=members;json=true" })
  members?: AddMembersToCallQueueMultipartFormDataMembers;
}


export class AddMembersToCallQueueRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddMembersToCallQueueApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddMembersToCallQueueMultipartFormData;
}


export class AddMembersToCallQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AddMembersToCallQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddMembersToCallQueuePathParams;

  @SpeakeasyMetadata()
  request?: AddMembersToCallQueueRequests;

  @SpeakeasyMetadata()
  security: AddMembersToCallQueueSecurity;
}


export class AddMembersToCallQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addMembersToCallQueue201ApplicationJSONObject?: Record<string, any>;
}
