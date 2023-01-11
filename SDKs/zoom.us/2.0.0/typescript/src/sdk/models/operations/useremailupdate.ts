import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserEmailUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserEmailUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


export class UserEmailUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email: string;
}


export class UserEmailUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UserEmailUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UserEmailUpdateMultipartFormData;
}


export class UserEmailUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserEmailUpdatePathParams;

  @SpeakeasyMetadata()
  request: UserEmailUpdateRequests;
}


export class UserEmailUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
