import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrackingfieldUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fieldId" })
  fieldId: string;
}


// TrackingfieldUpdateTrackingField
/** 
 * Tracking Field
**/
export class TrackingfieldUpdateTrackingField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field, multipart_form, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=recommended_values, multipart_form, name=recommended_values;json=true" })
  recommendedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=required, multipart_form, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=visible, multipart_form, name=visible" })
  visible?: boolean;
}


export class TrackingfieldUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  trackingField?: TrackingfieldUpdateTrackingField;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  trackingField1?: TrackingfieldUpdateTrackingField;
}


export class TrackingfieldUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class TrackingfieldUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrackingfieldUpdatePathParams;

  @SpeakeasyMetadata()
  request: TrackingfieldUpdateRequests;

  @SpeakeasyMetadata()
  security: TrackingfieldUpdateSecurity;
}


export class TrackingfieldUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
