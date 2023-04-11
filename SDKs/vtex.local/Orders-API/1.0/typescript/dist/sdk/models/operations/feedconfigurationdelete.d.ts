import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FeedConfigurationDeleteRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
}
export declare class FeedConfigurationDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
