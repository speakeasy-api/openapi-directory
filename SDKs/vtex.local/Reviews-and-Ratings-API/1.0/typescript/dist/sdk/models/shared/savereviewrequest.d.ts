import { SpeakeasyBase } from "../../../internal/utils";
export declare class SaveReviewRequest extends SpeakeasyBase {
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
}
