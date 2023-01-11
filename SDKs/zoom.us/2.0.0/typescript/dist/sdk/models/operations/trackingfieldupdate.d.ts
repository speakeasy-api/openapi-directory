import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrackingfieldUpdatePathParams extends SpeakeasyBase {
    fieldId: string;
}
/**
 * Tracking Field
**/
export declare class TrackingfieldUpdateTrackingField extends SpeakeasyBase {
    field?: string;
    recommendedValues?: string[];
    required?: boolean;
    visible?: boolean;
}
export declare class TrackingfieldUpdateRequests extends SpeakeasyBase {
    trackingField?: TrackingfieldUpdateTrackingField;
    trackingField1?: TrackingfieldUpdateTrackingField;
}
export declare class TrackingfieldUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class TrackingfieldUpdateRequest extends SpeakeasyBase {
    pathParams: TrackingfieldUpdatePathParams;
    request: TrackingfieldUpdateRequests;
    security: TrackingfieldUpdateSecurity;
}
export declare class TrackingfieldUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
