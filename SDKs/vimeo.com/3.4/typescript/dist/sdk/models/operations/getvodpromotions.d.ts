import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodPromotionsSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The filter to apply to the results.
 */
export declare enum GetVodPromotionsFilterEnum {
    Batch = "batch",
    Default = "default",
    Single = "single",
    Vip = "vip"
}
export declare class GetVodPromotionsRequest extends SpeakeasyBase {
    /**
     * The filter to apply to the results.
     */
    filter: GetVodPromotionsFilterEnum;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
}
export declare class GetVodPromotionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The filter is invalid.
     */
    legacyError?: shared.LegacyError;
    /**
     * The promotions were returned.
     */
    onDemandPromotion?: shared.OnDemandPromotion;
}
