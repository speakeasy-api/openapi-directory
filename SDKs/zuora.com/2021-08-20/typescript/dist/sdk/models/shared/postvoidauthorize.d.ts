import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTVoidAuthorize extends SpeakeasyBase {
    /**
     * The ID of the customer account. This field is generally required, but is optional if you are using the Ingenico ePayments gateway.
     */
    accountId?: string;
    /**
     * The number of the customer account. This field is generally required, but is optional if you are using the Ingenico ePayments gateway.
     */
    accountNumber?: string;
    /**
     * The order ID for the specific gateway.
     */
    gatewayOrderId: string;
    /**
     * The ID of the payment gateway instance. This field is required if you do not specify the `accountId` and `accountNumber` fields.
     */
    paymentGatewayId?: string;
    /**
     * The ID of the transaction.
     */
    transactionId: string;
}
