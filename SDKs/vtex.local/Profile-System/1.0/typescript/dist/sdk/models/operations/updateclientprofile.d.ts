import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateClientProfileRequestBody extends SpeakeasyBase {
    /**
     * Client's birth date in ISO 8601 format.
     */
    birthDate?: string;
    /**
     * Client's document.
     */
    document?: string;
    /**
     * Type of document informed in `document`.
     */
    documentType?: string;
    /**
     * Client's email address.
     */
    email?: string;
    /**
     * Client's first name.
     */
    firstName?: string;
    /**
     * Client's last name.
     */
    lastName?: string;
}
export declare class UpdateClientProfileRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: UpdateClientProfileRequestBody;
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
     * This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.
     *
     * @remarks
     *
     *
  > Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating.
     */
    ttl?: number;
}
export declare class UpdateClientProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updateClientProfile200ApplicationJSONObject?: Record<string, any>;
}
