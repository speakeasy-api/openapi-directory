import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PolicyGetRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent
     */
    contentType: string;
    /**
     * Policy ID
     */
    id: string;
}
export declare class PolicyGetResponse extends SpeakeasyBase {
    contentType: string;
    policyGetResponses?: shared.PolicyGetResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
