import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTVoidAuthorizeResponse extends SpeakeasyBase {
    /**
     * The order ID for the gateway.
     */
    gatewayOrderId?: string;
    /**
     * The result code of the request. 0 indicates the call succeeded, and other values indicate the call failed.
     */
    resultCode?: string;
    /**
     * The corresponding request ID.
     */
    resultMessage?: string;
    /**
     * Indicates whether the call succeeded.
     */
    success?: boolean;
    /**
     * The ID of the transaction.
     */
    transactionId?: string;
}
