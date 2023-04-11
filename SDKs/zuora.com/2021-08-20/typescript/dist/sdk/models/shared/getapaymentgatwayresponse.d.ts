import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETAPaymentGatwayResponse extends SpeakeasyBase {
    /**
     * The ID of the payment gateway.
     */
    id?: string;
    /**
     * Specifies if this payment gateway is in active status.
     */
    isActive?: boolean;
    /**
     * Specifies if this is the default payment gateway to process payments for your customer accounts.
     */
    isDefault?: boolean;
    /**
     * The name of the payment gateway.
     */
    name?: string;
    /**
     * The type of the payment gateway
     */
    type?: string;
}
