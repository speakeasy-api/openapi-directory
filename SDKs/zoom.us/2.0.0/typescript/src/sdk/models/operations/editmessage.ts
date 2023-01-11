import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageId" })
  messageId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class EditMessageApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=to_channel" })
  toChannel?: string;

  @SpeakeasyMetadata({ data: "json, name=to_contact" })
  toContact?: string;
}


export class EditMessageMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=to_channel" })
  toChannel?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=to_contact" })
  toContact?: string;
}


export class EditMessageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: EditMessageApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: EditMessageMultipartFormData;
}


export class EditMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class EditMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditMessagePathParams;

  @SpeakeasyMetadata()
  request?: EditMessageRequests;

  @SpeakeasyMetadata()
  security: EditMessageSecurity;
}


export class EditMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
