import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TrackingfieldDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class TrackingfieldDeleteRequest extends SpeakeasyBase {
    /**
     * The Tracking Field ID
     */
    fieldId: string;
}
export declare class TrackingfieldDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
