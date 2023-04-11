import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddClientPreferencesRequestBody extends SpeakeasyBase {
    /**
     * Locale chosen by the shopper. Determines website language.
     */
    locale?: string;
    /**
     * Indicates whether the shopper opted in to receive the store's news letter.
     */
    optinNewsLetter?: boolean;
}
export declare class AddClientPreferencesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: AddClientPreferencesRequestBody;
    /**
     * ID of the orderForm that will receive client profile information.
     */
    orderFormId: string;
}
export declare class AddClientPreferencesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    addClientPreferences200ApplicationJSONAny?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
