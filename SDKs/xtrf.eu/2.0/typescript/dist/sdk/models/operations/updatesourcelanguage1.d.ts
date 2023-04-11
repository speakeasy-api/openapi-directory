import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSourceLanguage1Request extends SpeakeasyBase {
    /**
     * Updated source language for a quote.
     */
    sourceLanguageDTO: shared.SourceLanguageDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateSourceLanguage1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
