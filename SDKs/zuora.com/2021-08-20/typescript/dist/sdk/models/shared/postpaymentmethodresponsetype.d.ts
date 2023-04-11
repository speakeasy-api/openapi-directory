import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTPaymentMethodResponseType extends SpeakeasyBase {
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
