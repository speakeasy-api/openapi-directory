import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReviewRequest extends SpeakeasyBase {
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
export declare class DeleteReviewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deleteReview200ApplicationJSONBoolean?: boolean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
