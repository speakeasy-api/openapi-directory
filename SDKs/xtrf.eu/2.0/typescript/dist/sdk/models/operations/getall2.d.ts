import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAll2Request extends SpeakeasyBase {
    /**
     * only vendor invoices modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAll2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * vendor invoices
     */
    providerInvoiceDTOS?: shared.ProviderInvoiceDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
