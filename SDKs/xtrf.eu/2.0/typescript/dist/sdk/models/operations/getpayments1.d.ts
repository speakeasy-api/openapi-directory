import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayments1Request extends SpeakeasyBase {
    /**
     * vendor invoice's internal identifier
     */
    invoiceId: number;
}
export declare class GetPayments1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * vendor invoice's payments
     */
    paymentDTOS?: shared.PaymentDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
