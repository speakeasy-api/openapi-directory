import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrackingfieldListSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Tracking Field
**/
export declare class TrackingfieldListTrackingFieldListTrackingField extends SpeakeasyBase {
    field?: string;
    id?: string;
    recommendedValues?: string[];
    required?: boolean;
    visible?: boolean;
}
/**
 * Tracking Field List
**/
export declare class TrackingfieldListTrackingFieldList extends SpeakeasyBase {
    totalRecords?: number;
    trackingFields?: TrackingfieldListTrackingFieldListTrackingField[];
}
export declare class TrackingfieldListRequest extends SpeakeasyBase {
    security: TrackingfieldListSecurity;
}
export declare class TrackingfieldListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    trackingFieldList?: TrackingfieldListTrackingFieldList;
}
