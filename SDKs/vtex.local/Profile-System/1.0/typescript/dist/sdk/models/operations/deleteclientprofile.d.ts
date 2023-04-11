import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteClientProfileRequest extends SpeakeasyBase {
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
}
export declare class DeleteClientProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
