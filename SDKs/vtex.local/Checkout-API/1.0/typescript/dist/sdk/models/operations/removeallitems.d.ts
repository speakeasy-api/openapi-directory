import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAllItemsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: Record<string, any>;
    /**
     * ID of the orderForm corresponding to the cart whose items you want to remove.
     */
    orderFormId: string;
}
export declare class RemoveAllItemsResponse extends SpeakeasyBase {
    contentType: string;
    removeAllItems200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
