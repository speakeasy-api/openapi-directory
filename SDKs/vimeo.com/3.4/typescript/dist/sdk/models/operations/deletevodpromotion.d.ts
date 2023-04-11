import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVodPromotionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVodPromotionRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
    /**
     * The ID of the promotion.
     */
    promotionId: number;
}
export declare class DeleteVodPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't delete a promotion for an On Demand page that you not own.
     */
    legacyError?: shared.LegacyError;
}
