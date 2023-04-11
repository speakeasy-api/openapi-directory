import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Tracking Field
 */
export declare class TrackingfieldListTrackingFieldListTrackingField extends SpeakeasyBase {
    /**
     * Label/ Name for the tracking field.
     */
    field?: string;
    /**
     * ID of Tracking Field
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
/**
 * Tracking Field List
 */
export declare class TrackingfieldListTrackingFieldList extends SpeakeasyBase {
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
    /**
     * Array of Tracking Fields
     */
    trackingFields?: TrackingfieldListTrackingFieldListTrackingField[];
}
export declare class TrackingfieldListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of Tracking Fields returned.
     */
    trackingFieldList?: TrackingfieldListTrackingFieldList;
}
