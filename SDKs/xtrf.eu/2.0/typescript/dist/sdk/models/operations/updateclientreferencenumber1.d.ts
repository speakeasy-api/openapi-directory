import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClientReferenceNumber1Request extends SpeakeasyBase {
    /**
     * Updated Client Reference Number for a quote.
     */
    stringDTO: shared.StringDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateClientReferenceNumber1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
