import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Create1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerInvoiceCreateResultDTO?: shared.CustomerInvoiceCreateResultDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
