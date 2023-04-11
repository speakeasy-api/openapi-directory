import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAddressByVersionRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.
     */
    addressId: string;
    /**
     * ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field.
     */
    addressVersionId: string;
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
    /**
     * Reason for requesting unmasked data.
     */
    reason: string;
}
export declare class GetAddressByVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getAddressByVersion200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
