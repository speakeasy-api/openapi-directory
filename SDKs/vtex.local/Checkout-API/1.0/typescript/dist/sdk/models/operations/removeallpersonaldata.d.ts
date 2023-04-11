import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveallpersonaldataRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * ID of the orderForm corresponding to the cart whose user's personal data you want to remove.
     */
    orderFormId: string;
}
export declare class RemoveallpersonaldataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    removeallpersonaldata200TextPlainObject?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
