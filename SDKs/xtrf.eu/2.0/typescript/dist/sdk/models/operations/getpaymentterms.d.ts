import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentTermsRequest extends SpeakeasyBase {
    /**
     * client invoice's internal identifier
     */
    invoiceId: number;
}
export declare class GetPaymentTermsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    paymentTermsDTO?: shared.PaymentTermsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
