import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetMultipleCustomFieldValuesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: Record<string, any>;
    /**
     * ID of the app created with the configuration API.
     */
    appId: string;
    /**
     * ID of the orderForm that will receive the new custom field values.
     */
    orderFormId: string;
}
export declare class SetMultipleCustomFieldValuesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    setMultipleCustomFieldValues200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
