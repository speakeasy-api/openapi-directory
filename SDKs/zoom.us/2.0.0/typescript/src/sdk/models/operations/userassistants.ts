import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserAssistantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserAssistantsUserAssistantsListAssistants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UserAssistantsUserAssistantsList
/** 
 * List of user's assistants.
**/
export class UserAssistantsUserAssistantsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assistants", elemType: UserAssistantsUserAssistantsListAssistants })
  assistants?: UserAssistantsUserAssistantsListAssistants[];
}


export class UserAssistantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserAssistantsPathParams;
}


export class UserAssistantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userAssistantsList?: UserAssistantsUserAssistantsList;
}
