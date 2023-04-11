import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifiedStoredCredentialProfileResponse extends SpeakeasyBase {
    /**
     * The number that identifies the stored credential profile within the payment method.
     *
     * @remarks
     *
     */
    number?: number;
    /**
     * ID of the payment method.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    success?: boolean;
}
