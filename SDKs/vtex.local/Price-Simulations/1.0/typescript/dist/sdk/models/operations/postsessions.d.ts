import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Contains every schema criteria. This is a serialized JSON object
 */
export declare class PostSessionsRequestBodyPublicCustomSessionKeys extends SpeakeasyBase {
    /**
     * Order Configuration criteria
     */
    value: string;
}
/**
 * Object to register session criteria
 */
export declare class PostSessionsRequestBodyPublic extends SpeakeasyBase {
    /**
     * Contains every schema criteria. This is a serialized JSON object
     */
    customSessionKeys: PostSessionsRequestBodyPublicCustomSessionKeys;
}
export declare class PostSessionsRequestBody extends SpeakeasyBase {
    /**
     * Object to register session criteria
     */
    public: PostSessionsRequestBodyPublic;
}
export declare class PostSessionsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent
     */
    contentType: string;
    requestBody?: PostSessionsRequestBody;
}
export declare class PostSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postSessions200ApplicationJSONAny?: any;
}
