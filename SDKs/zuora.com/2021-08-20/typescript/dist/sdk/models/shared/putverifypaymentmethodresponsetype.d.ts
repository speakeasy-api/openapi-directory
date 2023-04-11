import { SpeakeasyBase } from "../../../internal/utils";
export declare class PUTVerifyPaymentMethodResponseType extends SpeakeasyBase {
    /**
     * The ID of the verified payment method.
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
