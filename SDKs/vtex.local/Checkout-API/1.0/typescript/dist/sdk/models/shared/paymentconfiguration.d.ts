import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Payment Configuration object
 */
export declare class PaymentConfiguration extends SpeakeasyBase {
    /**
     * By default (when `false`), on a multi-seller purchase is on the run, a simple intersection with installments options configured by every seller will be available. When `true`, this option allows a more complex but flexible installment option, since it considers max installments of every seller configuration, even if those don't match. Installment values   may not be equal in this case.
     */
    allowInstallmentsMerge?: boolean;
    /**
     * Determines whether pre-authorized payments require authentication
     */
    requiresAuthenticationForPreAuthorizedPaymentOption: boolean;
}
