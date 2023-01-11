import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserAssistantDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assistantId" })
  assistantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserAssistantDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserAssistantDeletePathParams;
}


export class UserAssistantDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
