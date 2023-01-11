import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
/**
 * Tracking Field
**/
export declare class TrackingfieldCreateTrackingField extends SpeakeasyBase {
    field?: string;
    recommendedValues?: string[];
    required?: boolean;
    visible?: boolean;
}
export declare class TrackingfieldCreateRequests extends SpeakeasyBase {
    trackingField?: TrackingfieldCreateTrackingField;
    trackingField1?: TrackingfieldCreateTrackingField;
}
export declare class TrackingfieldCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Tracking Field
**/
export declare class TrackingfieldCreateTrackingField1 extends SpeakeasyBase {
    field?: string;
    id?: string;
    recommendedValues?: string[];
    required?: boolean;
    visible?: boolean;
}
export declare class TrackingfieldCreateRequest extends SpeakeasyBase {
    request: TrackingfieldCreateRequests;
    security: TrackingfieldCreateSecurity;
}
export declare class TrackingfieldCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    trackingField?: TrackingfieldCreateTrackingField1;
}
