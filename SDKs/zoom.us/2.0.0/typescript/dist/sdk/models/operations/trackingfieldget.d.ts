import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TrackingfieldGetSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class TrackingfieldGetRequest extends SpeakeasyBase {
    /**
     * The Tracking Field ID
     */
    fieldId: string;
}
/**
 * Tracking Field
 */
export declare class TrackingfieldGetTrackingField extends SpeakeasyBase {
    /**
     * Label/ Name for the tracking field.
     */
    field?: string;
    /**
     * Tracking Field ID
     */
    id?: string;
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
export declare class TrackingfieldGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Tracking Field object returned
     */
    trackingField?: TrackingfieldGetTrackingField;
}
