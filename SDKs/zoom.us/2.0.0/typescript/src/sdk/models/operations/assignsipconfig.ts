import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignSipConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AssignSipConfigApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_callout_internal_number" })
  showCalloutInternalNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_zoom_provided_callout_countries" })
  showZoomProvidedCalloutCountries?: number;

  @SpeakeasyMetadata({ data: "json, name=show_zoom_provided_numbers" })
  showZoomProvidedNumbers?: number;
}


export class AssignSipConfigMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=show_callout_internal_number" })
  showCalloutInternalNumber?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=show_zoom_provided_callout_countries" })
  showZoomProvidedCalloutCountries?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=show_zoom_provided_numbers" })
  showZoomProvidedNumbers?: number;
}


export class AssignSipConfigRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AssignSipConfigApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AssignSipConfigMultipartFormData;
}


export class AssignSipConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AssignSipConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignSipConfigPathParams;

  @SpeakeasyMetadata()
  request?: AssignSipConfigRequests;

  @SpeakeasyMetadata()
  security: AssignSipConfigSecurity;
}


export class AssignSipConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignSIPConfig204ApplicationJSONAny?: any;
}
