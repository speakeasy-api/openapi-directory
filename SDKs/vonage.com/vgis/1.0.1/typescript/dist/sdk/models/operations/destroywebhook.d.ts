import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DestroyWebhookRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the webhook
     */
    id: string;
}
export declare class DestroyWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
