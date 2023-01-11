import { SpeakeasyBase } from "../../../internal/utils";
import { BillingOptions } from "./billingoptions";
/**
 * Container for the electronic payment options.
**/
export declare class ProcessingOptionsElectronicPaymentOptions extends SpeakeasyBase {
    paymentMethodId?: string;
}
/**
 * Invoice or Payment.
**/
export declare class ProcessingOptions extends SpeakeasyBase {
    applicationOrder?: string[];
    applyCredit?: boolean;
    applyCreditBalance?: boolean;
    billingOptions?: BillingOptions;
    collectPayment?: boolean;
    electronicPaymentOptions?: ProcessingOptionsElectronicPaymentOptions;
    runBilling?: boolean;
}
