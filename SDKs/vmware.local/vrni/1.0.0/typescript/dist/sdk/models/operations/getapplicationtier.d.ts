import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationTierSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetApplicationTierRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    tierId: string;
}
export declare class GetApplicationTierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tier?: shared.Tier;
}
