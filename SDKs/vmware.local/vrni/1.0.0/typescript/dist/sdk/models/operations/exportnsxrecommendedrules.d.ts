import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportNsxRecommendedRulesSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class ExportNsxRecommendedRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    exportNsxRecommendedRules200ApplicationOctetStreamBinaryString?: Uint8Array;
}
