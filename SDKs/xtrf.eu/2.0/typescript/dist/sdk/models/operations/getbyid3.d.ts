import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById3Request extends SpeakeasyBase {
    /**
     * provider invoice's internal identifier
     */
    invoiceId: number;
}
export declare class GetById3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    providerInvoiceDTO?: shared.ProviderInvoiceDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
