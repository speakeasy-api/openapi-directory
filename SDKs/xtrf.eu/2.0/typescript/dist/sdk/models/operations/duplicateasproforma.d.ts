import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DuplicateAsProFormaRequest extends SpeakeasyBase {
    /**
     * client invoice's internal identifier
     */
    invoiceId: number;
}
export declare class DuplicateAsProFormaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerInvoiceDTO?: shared.CustomerInvoiceDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
