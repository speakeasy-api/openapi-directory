import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetArchivedPromotionsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
}
/**
 * Response object.
 */
export declare class GetArchivedPromotions200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array with promotions.
     */
    items?: shared.GetPromotions[];
}
export declare class GetArchivedPromotionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getArchivedPromotions200ApplicationJSONObject?: GetArchivedPromotions200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
