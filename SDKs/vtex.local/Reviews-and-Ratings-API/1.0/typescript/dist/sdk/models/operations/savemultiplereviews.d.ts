import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveMultipleReviewsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    requestBody: shared.SaveMultipleReviewsRequest[];
}
export declare class SaveMultipleReviewsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    saveMultipleReviews200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
