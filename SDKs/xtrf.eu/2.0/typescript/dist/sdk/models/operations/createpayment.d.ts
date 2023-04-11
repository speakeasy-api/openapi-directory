import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePaymentRequest extends SpeakeasyBase {
    /**
     * New payment.
     */
    paymentDTO: shared.PaymentDTO;
    /**
     * client invoice's internal identifier
     */
    invoiceId: number;
}
export declare class CreatePaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
