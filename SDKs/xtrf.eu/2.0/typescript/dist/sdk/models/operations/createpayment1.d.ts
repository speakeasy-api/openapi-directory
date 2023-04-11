import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePayment1Request extends SpeakeasyBase {
    /**
     * New payment.
     */
    paymentDTO: shared.PaymentDTO;
    /**
     * vendor invoice's internal identifier
     */
    invoiceId: number;
}
export declare class CreatePayment1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
