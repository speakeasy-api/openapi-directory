import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PolicyEvaluateRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent
     */
    contentType: string;
    evaluatePolicyRequest: shared.EvaluatePolicyRequest;
}
export declare class PolicyEvaluateResponse extends SpeakeasyBase {
    contentType: string;
    policyActionGetResponses?: shared.PolicyActionGetResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
