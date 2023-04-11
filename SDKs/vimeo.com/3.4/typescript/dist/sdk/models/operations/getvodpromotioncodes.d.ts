import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodPromotionCodesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetVodPromotionCodesRequest extends SpeakeasyBase {
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
    /**
     * The ID of the promotion.
     */
    promotionId: number;
}
export declare class GetVodPromotionCodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't create promotions for an On Demand page that you don't own.
     */
    legacyError?: shared.LegacyError;
    /**
     * The codes were returned.
     */
    onDemandPromotionCode?: shared.OnDemandPromotionCode;
}
