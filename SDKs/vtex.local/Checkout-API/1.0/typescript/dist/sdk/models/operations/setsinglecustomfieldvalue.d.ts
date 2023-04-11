import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetSingleCustomFieldValueRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    setsinglecustomfieldvalueRequest: shared.SetsinglecustomfieldvalueRequest;
    /**
     * Name of the app's field created through the Update orderForm Configuration endpoint.
     */
    appFieldName: string;
    /**
     * ID of the app created through the Update orderForm Configuration endpoint.
     */
    appId: string;
    /**
     * The ID of the orderForm whose custom field's value you want to change.
     */
    orderFormId: string;
}
export declare class SetSingleCustomFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
