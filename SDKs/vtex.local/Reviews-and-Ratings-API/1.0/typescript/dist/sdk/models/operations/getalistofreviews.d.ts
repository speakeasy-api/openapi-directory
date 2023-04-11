import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetalistofReviewsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Zero base starting record number, `0` is the default value.
     */
    from: string;
    /**
     * Case-sensitive fieldName to order records (optionally add `:asc` or `:desc`).
     */
    orderBy: string;
    /**
     * Filter the reviews by product ID.
     */
    productId: string;
    /**
     * Returns Reviews that contain the search term in `productId`, `sku`, `shopperId`, or `reviewerName`.
     */
    searchTerm: string;
    /**
     * Status of the review, approved (`true`) or not (`false`).
     */
    status: boolean;
    /**
     * Zero base ending record number, `3` is the default value.
     */
    to: string;
}
/**
 * Review's information.
 */
export declare class GetalistofReviews200ApplicationJSONData extends SpeakeasyBase {
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
/**
 * Range of the review's list.
 */
export declare class GetalistofReviews200ApplicationJSONRange extends SpeakeasyBase {
    /**
     * Zero base starting record number.
     */
    from?: number;
    /**
     * Zero base ending record number.
     */
    to?: number;
    /**
     * Total number of reviews on the list.
     */
    total?: number;
}
/**
 * OK
 */
export declare class GetalistofReviews200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array of reviews.
     */
    data?: GetalistofReviews200ApplicationJSONData[];
    /**
     * Range of the review's list.
     */
    range?: GetalistofReviews200ApplicationJSONRange;
}
export declare class GetalistofReviewsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getalistofReviews200ApplicationJSONObject?: GetalistofReviews200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
