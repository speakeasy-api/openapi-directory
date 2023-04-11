import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTPaymentMethodResponseDecryption extends SpeakeasyBase {
    /**
     * The payment amount contained within the encrypted token.
     *
     * @remarks
     *
     */
    amount?: string;
    /**
     * The ID of newly processed payment,
     *
     * @remarks
     *
     */
    paymentId?: string;
    /**
     * ID of the newly-created payment method.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
