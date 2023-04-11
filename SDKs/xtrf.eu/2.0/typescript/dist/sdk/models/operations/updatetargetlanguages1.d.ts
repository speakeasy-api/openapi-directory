import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTargetLanguages1Request extends SpeakeasyBase {
    /**
     * Updated target languages for a quote.
     */
    targetLanguagesDTO: shared.TargetLanguagesDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateTargetLanguages1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
