import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EditReviewRequestBody extends SpeakeasyBase {
    /**
     * Review's locale.
     */
    locale?: string;
    /**
     * Product ID.
     */
    productId: string;
    /**
     * Customer rating.
     */
    rating: number;
    /**
     * Reviewer name.
     */
    reviewerName: string;
    /**
     * Shopper email.
     */
    shopperId?: string;
    /**
     * Review's text.
     */
    text: string;
    /**
     * Review's title.
     */
    title: string;
    /**
     * If the reviewer is a verified purchaser (`true`) or not (`false`).
     */
    verifiedPurchaser?: boolean;
}
export declare class EditReviewRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    requestBody: EditReviewRequestBody;
    /**
     * Review ID.
     */
    reviewId: string;
}
/**
 * OK
 */
export declare class EditReview200ApplicationJSON extends SpeakeasyBase {
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
export declare class EditReviewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editReview200ApplicationJSONObject?: EditReview200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
