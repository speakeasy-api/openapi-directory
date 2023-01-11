import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



// TrackingfieldCreateTrackingField
/** 
 * Tracking Field
**/
export class TrackingfieldCreateTrackingField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field, multipart_form, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=recommended_values, multipart_form, name=recommended_values;json=true" })
  recommendedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=required, multipart_form, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=visible, multipart_form, name=visible" })
  visible?: boolean;
}


export class TrackingfieldCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  trackingField?: TrackingfieldCreateTrackingField;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  trackingField1?: TrackingfieldCreateTrackingField;
}


export class TrackingfieldCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// TrackingfieldCreateTrackingField1
/** 
 * Tracking Field
**/
export class TrackingfieldCreateTrackingField1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=recommended_values" })
  recommendedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class TrackingfieldCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: TrackingfieldCreateRequests;

  @SpeakeasyMetadata()
  security: TrackingfieldCreateSecurity;
}


export class TrackingfieldCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackingField?: TrackingfieldCreateTrackingField1;
}
