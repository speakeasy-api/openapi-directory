import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListApplicationTiersSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class ListApplicationTiersRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class ListApplicationTiersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tierListResponse?: shared.TierListResponse;
}
