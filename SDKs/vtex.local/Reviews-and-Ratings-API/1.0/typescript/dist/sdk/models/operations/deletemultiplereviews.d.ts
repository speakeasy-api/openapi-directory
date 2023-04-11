import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMultipleReviewsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    requestBody?: string[];
}
export declare class DeleteMultipleReviewsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deleteMultipleReviews200ApplicationJSONBoolean?: boolean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
