import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDatesRequest extends SpeakeasyBase {
    /**
     * client invoice's internal identifier
     */
    invoiceId: number;
}
export declare class GetDatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerInvoiceDatesDTO?: shared.CustomerInvoiceDatesDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
