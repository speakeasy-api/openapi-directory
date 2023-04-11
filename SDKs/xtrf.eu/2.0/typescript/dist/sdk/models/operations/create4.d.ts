import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Create4Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    providerInvoiceCreateResultDTO?: shared.ProviderInvoiceCreateResultDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
