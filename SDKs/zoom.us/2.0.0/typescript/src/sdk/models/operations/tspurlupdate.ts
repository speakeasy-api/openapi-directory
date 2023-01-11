import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TspUrlUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class TspUrlUpdateTspGlobalDialInUrlSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_url, multipart_form, name=audio_url" })
  audioUrl?: string;
}


export class TspUrlUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  tspGlobalDialInURLSetting?: TspUrlUpdateTspGlobalDialInUrlSetting;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  tspGlobalDialInURLSetting1?: TspUrlUpdateTspGlobalDialInUrlSetting;
}


export class TspUrlUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class TspUrlUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TspUrlUpdatePathParams;

  @SpeakeasyMetadata()
  request?: TspUrlUpdateRequests;

  @SpeakeasyMetadata()
  security: TspUrlUpdateSecurity;
}


export class TspUrlUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
