import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrackingfieldGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fieldId" })
  fieldId: string;
}


export class TrackingfieldGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// TrackingfieldGetTrackingField
/** 
 * Tracking Field
**/
export class TrackingfieldGetTrackingField extends SpeakeasyBase {
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


export class TrackingfieldGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrackingfieldGetPathParams;

  @SpeakeasyMetadata()
  security: TrackingfieldGetSecurity;
}


export class TrackingfieldGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackingField?: TrackingfieldGetTrackingField;
}
