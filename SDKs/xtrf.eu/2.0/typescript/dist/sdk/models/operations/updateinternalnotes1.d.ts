import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateInternalNotes1Request extends SpeakeasyBase {
    /**
     * Updated Internal Notes for a quote.
     */
    stringDTO: shared.StringDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateInternalNotes1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
