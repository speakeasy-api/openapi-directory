import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReviewbyReviewIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Review ID.
     */
    reviewId: string;
}
/**
 * OK
 */
export declare class GetReviewbyReviewId200ApplicationJSON extends SpeakeasyBase {
    /**
     * If the review was approved (`true`) or not (`false`).
     */
    approved?: boolean;
    /**
     * Review ID.
     */
    id?: string;
    /**
     * Review's locale.
     */
    locale?: string;
    /**
     * Review's origin location.
     */
    location?: string;
    /**
     * Past reviews of the same product.
     */
    pastReviews?: string;
    /**
     * Product ID.
     */
    productId?: string;
    /**
     * Customer rating.
     */
    rating?: number;
    /**
     * Review's date and time.
     */
    reviewDateTime?: string;
    /**
     * Reviewer name.
     */
    reviewerName?: string;
    /**
     * Review's search date.
     */
    searchDate?: string;
    /**
     * Shopper email.
     */
    shopperId?: string;
    /**
     * SKU ID.
     */
    sku?: string;
    /**
     * Review's text.
     */
    text?: string;
    /**
     * Review's title.
     */
    title?: string;
    /**
     * If the reviewer is a verified purchaser (`true`) or not (`false`).
     */
    verifiedPurchaser?: boolean;
}
export declare class GetReviewbyReviewIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getReviewbyReviewId200ApplicationJSONObject?: GetReviewbyReviewId200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
