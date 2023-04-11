import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddTierSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class AddTierRequest extends SpeakeasyBase {
    tierRequest: shared.TierRequest;
    /**
     * entity id
     */
    id: string;
}
export declare class AddTierResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tier?: shared.Tier;
}
