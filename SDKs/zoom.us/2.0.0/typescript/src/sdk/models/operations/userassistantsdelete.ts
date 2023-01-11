import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserAssistantsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserAssistantsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserAssistantsDeletePathParams;
}


export class UserAssistantsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
