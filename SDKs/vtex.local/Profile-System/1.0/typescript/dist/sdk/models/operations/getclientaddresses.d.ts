import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetClientAddressesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
     *
     * @remarks
     *
     *
  > Currently, there are two possible values for this parameter: `email` and `document`.
     */
    alternativeKey?: string;
    /**
     * ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
     */
    profileId: string;
}
export declare class GetClientAddressesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getClientAddresses200ApplicationJSONAnies?: any[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
