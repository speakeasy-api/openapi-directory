import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendimmessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chat_user" })
  chatUser?: string;
}


export class SendimmessagesApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendimmessagesMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=message" })
  message?: string;
}


export class SendimmessagesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: SendimmessagesApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: SendimmessagesMultipartFormData;
}


export class SendimmessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class Sendimmessages201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class SendimmessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SendimmessagesQueryParams;

  @SpeakeasyMetadata()
  request?: SendimmessagesRequests;

  @SpeakeasyMetadata()
  security: SendimmessagesSecurity;
}


export class SendimmessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendimmessages201ApplicationJSONObject?: Sendimmessages201ApplicationJson;
}
