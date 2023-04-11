import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatepartialinvoiceSendTrackingNumberRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    updatepartialinvoiceSendTrackingNumberRequest: shared.UpdatepartialinvoiceSendTrackingNumberRequest;
    /**
     * Number that identifies the invoice.
     */
    invoiceNumber: string;
    /**
     * Unique code that identifies the order whose invoice is being sent.
     */
    orderId: string;
}
export declare class UpdatepartialinvoiceSendTrackingNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updatepartialinvoiceSendTrackingNumber?: shared.UpdatepartialinvoiceSendTrackingNumber;
}
