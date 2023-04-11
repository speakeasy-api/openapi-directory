import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemovesinglecustomfieldvalueRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the app's field created through the Update orderForm Configuration endpoint and which will be deleted.
     */
    appFieldName: string;
    /**
     * ID of the app created through the Update orderForm Configuration endpoint.
     */
    appId: string;
    /**
     * The ID of the orderForm from which you want to remove the custom field value.
     */
    orderFormId: string;
}
export declare class RemovesinglecustomfieldvalueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
