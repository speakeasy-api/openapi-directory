import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCallQueueApplicationJsonMembersUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// CreateCallQueueApplicationJsonMembers
/** 
 * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
**/
export class CreateCallQueueApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phone_ids" })
  commonAreaPhoneIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: CreateCallQueueApplicationJsonMembersUsers })
  users?: CreateCallQueueApplicationJsonMembersUsers[];
}


export class CreateCallQueueApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: CreateCallQueueApplicationJsonMembers;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId: string;
}


export class CreateCallQueueMultipartFormDataMembersUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// CreateCallQueueMultipartFormDataMembers
/** 
 * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
**/
export class CreateCallQueueMultipartFormDataMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phone_ids" })
  commonAreaPhoneIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: CreateCallQueueMultipartFormDataMembersUsers })
  users?: CreateCallQueueMultipartFormDataMembersUsers[];
}


export class CreateCallQueueMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=members;json=true" })
  members?: CreateCallQueueMultipartFormDataMembers;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_id" })
  siteId: string;
}


export class CreateCallQueueRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CreateCallQueueApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: CreateCallQueueMultipartFormData;
}


export class CreateCallQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class CreateCallQueue201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class CreateCallQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateCallQueueRequests;

  @SpeakeasyMetadata()
  security: CreateCallQueueSecurity;
}


export class CreateCallQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createCallQueue201ApplicationJSONObject?: CreateCallQueue201ApplicationJson;
}
