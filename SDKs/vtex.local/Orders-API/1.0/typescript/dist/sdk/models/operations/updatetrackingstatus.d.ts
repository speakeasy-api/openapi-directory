import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTrackingStatusRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    updateTrackingStatusRequest: shared.UpdateTrackingStatusRequest;
    /**
     * Number that identifies the invoice.
     */
    invoiceNumber: string;
    /**
     * Order ID is a unique code that identifies an order.
     */
    orderId: string;
}
export declare class UpdateTrackingStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updateTrackingStatus?: shared.UpdateTrackingStatus;
}
