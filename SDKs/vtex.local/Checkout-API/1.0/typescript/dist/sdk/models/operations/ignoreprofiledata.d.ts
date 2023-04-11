import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IgnoreProfileDataRequestBody extends SpeakeasyBase {
    /**
     * Indicates whether profile data should be ignored.
     */
    ignoreProfileData?: boolean;
}
export declare class IgnoreProfileDataRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: IgnoreProfileDataRequestBody;
    /**
     * ID of the orderForm corresponding to the cart whose items will have the price changed.
     */
    orderFormId: string;
}
export declare class IgnoreProfileDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
