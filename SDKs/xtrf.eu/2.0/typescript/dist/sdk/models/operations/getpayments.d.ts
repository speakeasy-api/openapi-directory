import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentsRequest extends SpeakeasyBase {
    /**
     * client invoice's internal identifier
     */
    invoiceId: number;
}
export declare class GetPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * client invoice's payments
     */
    paymentDTOS?: shared.PaymentDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
