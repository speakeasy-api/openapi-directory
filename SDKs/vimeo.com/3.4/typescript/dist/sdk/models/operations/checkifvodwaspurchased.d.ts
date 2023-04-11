import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfVodWasPurchasedSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CheckIfVodWasPurchasedRequest extends SpeakeasyBase {
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CheckIfVodWasPurchasedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The requested user isn't the same as the authenticated user.
     */
    legacyError?: shared.LegacyError;
    /**
     * You have purchased the On Demand page.
     */
    onDemandPage?: shared.OnDemandPage;
}
