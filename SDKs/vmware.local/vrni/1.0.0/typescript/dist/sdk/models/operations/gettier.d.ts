import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTierSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetTierRequest extends SpeakeasyBase {
    /**
     * Authorization Header
     */
    authorization: string;
    tierId: string;
}
export declare class GetTierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tier?: shared.Tier;
}
