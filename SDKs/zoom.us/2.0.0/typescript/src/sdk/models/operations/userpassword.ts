import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserPasswordApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}


export class UserPasswordMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password: string;
}


export class UserPasswordRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UserPasswordApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UserPasswordMultipartFormData;
}


export class UserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserPasswordPathParams;

  @SpeakeasyMetadata()
  request: UserPasswordRequests;
}


export class UserPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
