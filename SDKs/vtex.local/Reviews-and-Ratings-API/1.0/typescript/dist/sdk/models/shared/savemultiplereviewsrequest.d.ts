import { SpeakeasyBase } from "../../../internal/utils";
export declare class SaveMultipleReviewsRequest extends SpeakeasyBase {
    /**
     * If the review was approved (`true`) or not (`false`).
     */
    approved: boolean;
    /**
     * Review ID.
     */
    id?: string;
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
    verifiedPurchaser: boolean;
}
