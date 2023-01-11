import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrackingfieldListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// TrackingfieldListTrackingFieldListTrackingField
/** 
 * Tracking Field
**/
export class TrackingfieldListTrackingFieldListTrackingField extends SpeakeasyBase {
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


// TrackingfieldListTrackingFieldList
/** 
 * Tracking Field List
**/
export class TrackingfieldListTrackingFieldList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: TrackingfieldListTrackingFieldListTrackingField })
  trackingFields?: TrackingfieldListTrackingFieldListTrackingField[];
}


export class TrackingfieldListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: TrackingfieldListSecurity;
}


export class TrackingfieldListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackingFieldList?: TrackingfieldListTrackingFieldList;
}
