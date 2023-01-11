import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePhoneSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class UpdatePhoneSettingsApplicationJsonByoc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


export class UpdatePhoneSettingsApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byoc" })
  byoc?: UpdatePhoneSettingsApplicationJsonByoc;
}


export class UpdatePhoneSettingsMultipartFormDataByoc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


export class UpdatePhoneSettingsMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=byoc;json=true" })
  byoc?: UpdatePhoneSettingsMultipartFormDataByoc;
}


export class UpdatePhoneSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdatePhoneSettingsApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdatePhoneSettingsMultipartFormData;
}


export class UpdatePhoneSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdatePhoneSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePhoneSettingsPathParams;

  @SpeakeasyMetadata()
  request?: UpdatePhoneSettingsRequests;

  @SpeakeasyMetadata()
  security: UpdatePhoneSettingsSecurity;
}


export class UpdatePhoneSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePhoneSettings204ApplicationJSONAny?: any;
}
