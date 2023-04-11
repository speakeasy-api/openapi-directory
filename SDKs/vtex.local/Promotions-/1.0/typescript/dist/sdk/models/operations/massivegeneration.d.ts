import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MassiveGenerationRequestBody extends SpeakeasyBase {
    /**
     * Coupon code.
     */
    couponCode: string;
    /**
     * Coupon expiration interval per use.
     */
    expirationIntervalPerUse: string;
    /**
     * Defines if the coupon is archived (`true`) or not (`false`).
     */
    maxItemsPerClient: number;
    /**
     * UTM campaign code.
     */
    utmCampaign: string;
    /**
     * UTM source code.
     */
    utmSource: string;
}
export declare class MassiveGenerationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: MassiveGenerationRequestBody;
    /**
     * Quantity of coupons to generate
     */
    quantity: number;
}
export declare class MassiveGenerationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    couponCodes?: string[];
}
