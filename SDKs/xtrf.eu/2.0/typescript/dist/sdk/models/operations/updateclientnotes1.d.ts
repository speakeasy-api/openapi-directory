import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClientNotes1Request extends SpeakeasyBase {
    /**
     * Updated Client Notes for a quote.
     */
    stringDTO: shared.StringDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateClientNotes1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
