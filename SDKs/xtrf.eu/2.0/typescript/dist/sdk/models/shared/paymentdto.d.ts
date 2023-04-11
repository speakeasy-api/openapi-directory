import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDTO } from "./timedto";
/**
 * New payment.
 */
export declare class PaymentDTO extends SpeakeasyBase {
    amount?: number;
    notes?: string;
    paymentDate?: TimeDTO;
    paymentMethodId?: number;
}
