import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRecommendedRulesSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class ListRecommendedRulesResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * Success
     */
    recommendedRules?: shared.RecommendedRules;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
