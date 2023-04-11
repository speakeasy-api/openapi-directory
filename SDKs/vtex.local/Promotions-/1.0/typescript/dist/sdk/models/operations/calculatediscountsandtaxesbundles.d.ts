import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CalculatediscountsandtaxesBundlesServerList: readonly ["http://example.com/.{environment}.com.br/api/rnb"];
export declare class CalculatediscountsandtaxesBundlesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    calculatediscountsandtaxesBundlesRequest: shared.CalculatediscountsandtaxesBundlesRequest;
    /**
     * Type of the content being sent.
     */
    contentType: string;
}
export declare class CalculatediscountsandtaxesBundlesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
