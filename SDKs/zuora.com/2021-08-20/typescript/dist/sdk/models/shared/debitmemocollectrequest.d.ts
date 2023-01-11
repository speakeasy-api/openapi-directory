import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Some detail info that would be used to processed an electronic payment.
 * The info would only effect when `collect` set to `true`.
 *
**/
export declare class DebitMemoCollectRequestPayment extends SpeakeasyBase {
    gatewayId?: string;
    paymentMethodId?: string;
}
export declare class DebitMemoCollectRequest extends SpeakeasyBase {
    applicationOrder?: string[];
    applyCredit?: boolean;
    collect?: boolean;
    payment?: DebitMemoCollectRequestPayment;
}
