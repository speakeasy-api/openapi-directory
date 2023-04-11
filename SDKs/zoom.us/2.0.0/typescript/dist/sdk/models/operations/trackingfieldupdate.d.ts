import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TrackingfieldUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Tracking Field
 */
export declare class TrackingfieldUpdateTrackingField extends SpeakeasyBase {
    /**
     * Label/ Name for the tracking field.
     */
    field?: string;
    /**
     * Array of recommended values
     */
    recommendedValues?: string[];
    /**
     * Tracking Field Required
     */
    required?: boolean;
    /**
     * Tracking Field Visible
     */
    visible?: boolean;
}
export declare class TrackingfieldUpdateRequest extends SpeakeasyBase {
    requestBody: TrackingfieldUpdateTrackingField;
    /**
     * The Tracking Field ID
     */
    fieldId: string;
}
export declare class TrackingfieldUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
