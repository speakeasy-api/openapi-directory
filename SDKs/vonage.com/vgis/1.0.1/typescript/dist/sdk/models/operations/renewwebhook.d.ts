import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RenewWebhookRequest extends SpeakeasyBase {
    /**
     * Webhook ID
     */
    id: string;
}
export declare class RenewWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    webhook?: shared.Webhook;
}
