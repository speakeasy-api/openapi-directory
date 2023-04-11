import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodPromotionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetVodPromotionRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
    /**
     * The ID of the promotion.
     */
    promotionId: number;
}
export declare class GetVodPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't view a promotion for an On Demand page that you don't own.
     */
    legacyError?: shared.LegacyError;
    /**
     * The promotion was returned.
     */
    onDemandPromotion?: shared.OnDemandPromotion;
}
