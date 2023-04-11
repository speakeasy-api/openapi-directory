import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllRequest extends SpeakeasyBase {
    /**
     * only client invoices modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * client invoices
     */
    customerInvoiceDTOS?: shared.CustomerInvoiceDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
