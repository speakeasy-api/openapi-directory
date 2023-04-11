import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateQuoteExpiryRequest extends SpeakeasyBase {
    /**
     * Updated Quote Expiry Date for a quote.
     */
    timeDTO: shared.TimeDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateQuoteExpiryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
