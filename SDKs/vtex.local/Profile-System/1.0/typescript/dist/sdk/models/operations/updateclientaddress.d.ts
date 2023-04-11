import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateClientAddressRequestBody extends SpeakeasyBase {
    /**
     * Name of administrative area, such as the state or province.
     */
    administrativeAreaLevel1?: string;
    /**
     * Two letter country code.
     */
    countryCode?: string;
    /**
     * Name of the address country.
     */
    countryName?: string;
    /**
     * Name of address locality, such as the city.
     */
    locality?: string;
    /**
     * Name of the address locality area, such as the neighborhood or district.
     */
    localityAreaLevel1?: string;
    /**
     * Address postal code.
     */
    postalCode?: string;
    /**
     * Name of the address country.
     */
    route?: string;
    /**
     * Name of the address country.
     */
    streetNumber?: string;
}
export declare class UpdateClientAddressRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: UpdateClientAddressRequestBody;
    /**
     * ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.
     */
    addressId: string;
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
export declare class UpdateClientAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updateClientAddress200ApplicationJSONObject?: Record<string, any>;
}
