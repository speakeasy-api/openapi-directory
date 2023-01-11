import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserLevelChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class UpdateUserLevelChannelApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class UpdateUserLevelChannelMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;
}


export class UpdateUserLevelChannelRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateUserLevelChannelApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateUserLevelChannelMultipartFormData;
}


export class UpdateUserLevelChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateUserLevelChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserLevelChannelPathParams;

  @SpeakeasyMetadata()
  request?: UpdateUserLevelChannelRequests;

  @SpeakeasyMetadata()
  security: UpdateUserLevelChannelSecurity;
}


export class UpdateUserLevelChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateUserLevelChannel204ApplicationJSONAny?: any;
}
