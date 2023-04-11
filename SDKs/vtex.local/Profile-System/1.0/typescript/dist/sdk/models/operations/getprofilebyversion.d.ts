import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProfileByVersionRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
     */
    profileId: string;
    /**
     * ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field.
     */
    profileVersionId: string;
}
export declare class GetProfileByVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getProfileByVersion200ApplicationJSONAnies?: any[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
