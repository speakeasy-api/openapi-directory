import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrackingfieldGetPathParams extends SpeakeasyBase {
    fieldId: string;
}
export declare class TrackingfieldGetSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Tracking Field
**/
export declare class TrackingfieldGetTrackingField extends SpeakeasyBase {
    field?: string;
    id?: string;
    recommendedValues?: string[];
    required?: boolean;
    visible?: boolean;
}
export declare class TrackingfieldGetRequest extends SpeakeasyBase {
    pathParams: TrackingfieldGetPathParams;
    security: TrackingfieldGetSecurity;
}
export declare class TrackingfieldGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    trackingField?: TrackingfieldGetTrackingField;
}
