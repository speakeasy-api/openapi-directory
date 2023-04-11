import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestJSONataExpressionRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    testJSONataExpression?: shared.TestJSONataExpression;
}
export declare class TestJSONataExpressionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
