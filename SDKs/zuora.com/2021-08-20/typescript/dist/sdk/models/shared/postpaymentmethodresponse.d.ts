import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error information. Only applicable if the payment method was not created.
 *
 * @remarks
 *
 */
export declare class POSTPaymentMethodResponseReasons extends SpeakeasyBase {
    /**
     * Error code.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * Error message.
     *
     * @remarks
     *
     */
    message?: string;
}
export declare class POSTPaymentMethodResponse extends SpeakeasyBase {
    /**
     * Internal ID of the payment method that was created.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    reasons?: POSTPaymentMethodResponseReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
