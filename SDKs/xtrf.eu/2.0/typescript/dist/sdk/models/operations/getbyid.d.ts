import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetByIdRequest extends SpeakeasyBase {
    /**
     * list of adittional fields which should be embedded in the response (ie. tasks)
     */
    embed?: string;
    /**
     * client invoice's internal identifier
     */
    invoiceId: number;
}
export declare class GetByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerInvoiceDTO?: shared.CustomerInvoiceDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
