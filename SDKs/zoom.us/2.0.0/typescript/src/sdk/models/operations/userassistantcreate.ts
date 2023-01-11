import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserAssistantCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserAssistantCreateUserAssistantsListAssistants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UserAssistantCreateUserAssistantsList
/** 
 * List of user's assistants.
**/
export class UserAssistantCreateUserAssistantsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assistants, multipart_form, name=assistants;json=true", elemType: UserAssistantCreateUserAssistantsListAssistants })
  assistants?: UserAssistantCreateUserAssistantsListAssistants[];
}


export class UserAssistantCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userAssistantsList?: UserAssistantCreateUserAssistantsList;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  userAssistantsList1?: UserAssistantCreateUserAssistantsList;
}


export class UserAssistantCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserAssistantCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_at" })
  addAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string;
}


export class UserAssistantCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserAssistantCreatePathParams;

  @SpeakeasyMetadata()
  request: UserAssistantCreateRequests;

  @SpeakeasyMetadata()
  security: UserAssistantCreateSecurity;
}


export class UserAssistantCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userAssistantCreate201ApplicationJSONObject?: UserAssistantCreate201ApplicationJson;
}
