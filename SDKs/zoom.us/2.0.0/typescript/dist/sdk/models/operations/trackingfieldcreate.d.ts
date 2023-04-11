import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TrackingfieldCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Tracking Field
 */
export declare class TrackingfieldCreateTrackingField extends SpeakeasyBase {
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
/**
 * Tracking Field
 */
export declare class TrackingfieldCreateTrackingField1 extends SpeakeasyBase {
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
export declare class TrackingfieldCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Tracking Field created
     */
    trackingField?: TrackingfieldCreateTrackingField1;
}
